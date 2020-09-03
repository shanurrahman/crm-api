import { Document } from "mongoose";

export interface CampaignConfig extends Document {
    name: string,
    internalField: string,
    readableField: string,
    type: string,
    checked: boolean
}