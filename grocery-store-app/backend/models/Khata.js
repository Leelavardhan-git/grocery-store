import mongoose from "mongoose";
const KhataSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  entries: [
    {
      type: { type: String, enum: ["credit","debit"], required: true }, // credit = customer owes, debit = payment
      amount: { type: Number, required: true },
      note: String,
      date: { type: Date, default: Date.now }
    }
  ],
  balance: { type: Number, default: 0 } // positive = customer owes
});
export default mongoose.model("Khata", KhataSchema);
