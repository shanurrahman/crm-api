"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadSchema = void 0;
const mongoose_1 = require("mongoose");
exports.LeadSchema = new mongoose_1.Schema({
    externalId: { type: String, required: true },
    history: [
        {
            type: new mongoose_1.Schema({
                oldUser: String,
                newUser: String,
                note: String,
                callRecordUrl: String,
                location: { lat: String, lon: String },
                callStatus: String,
                attachment: String,
            }, { timestamps: { createdAt: true, updatedAt: false } }),
        },
    ],
    email: {
        type: String,
        required: true,
    },
    campaign: String,
    firstName: String,
    lastName: String,
    source: String,
    amount: String,
    customerEmail: String,
    phoneNumberPrefix: String,
    phoneNumber: String,
    leadStatus: String,
    address: String,
    followUp: Date,
    companyName: String,
    remarks: String,
    product: String,
    geoLocation: String,
    bucket: String,
    operationalArea: String,
    pincode: Number,
    organization: { type: mongoose_1.Schema.Types.ObjectId, ref: "Organization" },
}, {
    timestamps: true,
    autoIndex: true,
    strict: false,
});
exports.LeadSchema.index({ "$**": "text" });
//# sourceMappingURL=lead.schema.js.map