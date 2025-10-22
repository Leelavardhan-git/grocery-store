import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },   // selling price
  costPrice: { type: Number, default: 0 },   // cost to shop owner
  stock: { type: Number, default: 0 },
  category: { type: String, default: "general" },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Product", ProductSchema);
