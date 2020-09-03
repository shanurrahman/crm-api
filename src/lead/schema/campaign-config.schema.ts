import { Schema } from "mongoose";

export const CampaignConfigSchema = new Schema({
    name: String,
    internalField: String,
    readableField: String,
    type: String,
    checked: Boolean
});