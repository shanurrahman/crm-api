/** https://www.youtube.com/watch?v=srPXMt1Q0nY&t=477s */ 
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Lead from "../models/lead";

export const findAll = async(req: Request, res: Response, next: NextFunction) => {
    const { page, perPage, sortBy='createdAt' } = req.query;

    const limit = Number(perPage);
    const skip = Number((page-1)*limit);
    const leads = await Lead.aggregate([
        {$match: {}},
        {$sort: {[sortBy]: 1}},
        {$skip: skip},
        {$limit: limit}
    ]);
    res.status(200).json(leads);
};


export const insertOne = (req: Request, res: Response, next: NextFunction) => {
    const lead = new Lead({
        _id: new mongoose.Types.ObjectId(),
        createdBy: mongoose.Types.ObjectId((req.user as any).id),
        handler: mongoose.Types.ObjectId((req.user as any).id),
        amount: req.body.amount,
        customer: {
            name: req.body.nickname,
            phoneNumber: req.body.phoneNumber,
            phoneNumberPrefix: req.body.phoneNumberPrefix,
            email: req.body.email,
        },
        expiresOn: req.body.followUp,
        notes: [
            {content: `Lead Created by ${(req.user as any).email} for ${req.body.nickname} (${req.body.email})`, timestamp: new Date()}
        ],
        followUpDate: req.body.followUp,
        status: req.body.status,
        source: "web", 
    });

    lead
        .save()
        .then((result: any) => {
            res.status(201).json({
                message: "Created lead successfully",
                createdProduct: {
                    name: result.name,
                    price: result.price,
                    _id: result._id,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/lead/" + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

export const findOneById = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.leadId;
    const lead = await Lead.findById(id);

    res.status(200).send(lead);
};


export const patch = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.productId;
    const updateOps: {[index: string]: any} = {};
    for (const ops of req.body) {
        const propName = ops.propName;
        updateOps[propName] = ops.value;
    }
    Lead.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Lead updated",
                request: {
                    type: "GET",
                    url: "http://localhost:3000/lead/" + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

export const deleteOne = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.productId;
    Lead.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Lead deleted",
                request: {
                    type: "POST",
                    url: "http://localhost:3000/lead",
                    body: { name: "String", price: "Number" }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};