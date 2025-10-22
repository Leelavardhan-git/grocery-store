import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/grocery";
mongoose.connect(MONGO_URI).then(async () => {
  console.log("Connected");
  await Product.deleteMany({});
  await Product.insertMany([
    { name: "Rice 5kg", price: 400, costPrice: 350, stock: 20, category: "grocery" },
    { name: "Sugar 1kg", price: 45, costPrice: 38, stock: 50, category: "grocery" },
    { name: "Oil 1L", price: 160, costPrice: 130, stock: 30, category: "grocery" }
  ]);
  console.log("Seeded");
  process.exit(0);
});
