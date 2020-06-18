import mongoose from "mongoose";
import { STATUS, STAGE, TRANSITIONS } from "../types/leadMetadata";


// add a lead priority index [An enum variable with list of priorities]
const leadSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  email: {
    type: String, required: true
  },
  nickname: {
    type: String
  },
  phoneNumberPrefix: {
    type: Date
  },
  phoneNumber: {
    type: String
  },
  amount: {
    type: Number
  },
  followUp: {
    type: Date
  },
  agree: {
    type: Boolean
  },
  status: {
    type: String
  }
}, {
  timestamps: true,
  autoIndex: true
});

leadSchema.index({'$**': 'text'});
export default mongoose.model("Lead", leadSchema);