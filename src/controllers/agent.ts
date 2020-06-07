import Agent from '../models/Agent';
import { NextFunction, Request, Response } from "express";
import AdminAction from '../models/AdminAction';
import mongoose from "mongoose";
import parseExcel from '../util/parseExcel';
// import agentValidator from '../validator/agent';



export const insertMany = async(req: Request, res: Response, next: NextFunction) => {
    const userid = (req.user as Express.User & {id: string}).id;
    const jsonRes = parseExcel(req.file.path);
    
    const adminActions = new AdminAction({
        userid: mongoose.Types.ObjectId(userid),
        actionType: "upload",
        filePath: req.file.path,
        savedOn: "disk",
        fileType: "agentBulk"
    });


    await saveAgents(jsonRes); //this will send uploaded path to the worker, or aws s3 location
    try {
        const result = await adminActions.save();
        res.status(200).json({success: true, filePath: req.file.path, message: "successfully parsed file"});
    }catch(e) {
        res.status(500).json({success: false, message: "An Error Occured while parsing the file"});
    }
};


const saveAgents = async(agents: any[]) => {
    // validateAgents(agents);
    const defaults = { createdAt: Date.now(), updatedAt: Date.now() };
    let bulk = Agent.collection.initializeUnorderedBulkOp();
    let c = 0;
    for(let a of agents) {
        c++;
        bulk
            .find({email: a.email})
            .upsert()
            .updateOne({
                ...a,
                ...defaults
            });
        if(c%1000 === 0){
            bulk.execute((err, res)=>{
                console.log("Finished iteration ", c%1000, err, res);
                bulk = Agent.collection.initializeUnorderedBulkOp();
            })
        }
    }
    if(c % 1000 !==0 )
        bulk.execute((err, res)=>{
            console.log("Finished iteration ", c%1000, err, JSON.stringify(res));
        })
}



// const validateAgents = (data: any) => {
//     const { valid, validate } = agentValidator(data);
//     if (!valid) {
//         validate.errors.forEach(error =>{
//             const {message, data, dataPath} = error;
//             console.log(message, data, dataPath);
//         })
//     }else{
//         console.log("no errors")
//     }
// }