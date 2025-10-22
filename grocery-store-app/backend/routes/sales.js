import express from "express";
import Sale from "../models/Sale.js";
import Product from "../models/Product.js";
const router = express.Router();

// GET sales
router.get("/", async (req, res) => {
  const sales = await Sale.find().populate("product").sort({ date: -1 });
  res.json(sales);
});

// POST new sale (updates product stock)
router.post("/", async (req, res) => {
  const { product: productId, qty, sellingPrice, note } = req.body;
  const product = await Product.findById(productId);
  if (!product) return res.status(400).json({ error: "Product not found" });
  if (product.stock < qty) return res.status(400).json({ error: "Insufficient stock" });

  const total = qty * sellingPrice;
  const sale = new Sale({ product: productId, qty, sellingPrice, total, note });
  await sale.save();

  // reduce stock
  product.stock -= qty;
  await product.save();

  const populated = await sale.populate("product").execPopulate();
  res.json(populated);
});

export default router;
