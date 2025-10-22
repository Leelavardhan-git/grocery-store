import mongoose from "mongoose";
const SaleSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  qty: { type: Number, required: true },
  sellingPrice: { type: Number, required: true },
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  note: String
});
export default mongoose.model("Sale", SaleSchema);
