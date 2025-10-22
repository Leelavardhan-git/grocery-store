import express from "express";
import Product from "../models/Product.js";
const router = express.Router();

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// POST create product
router.post("/", async (req, res) => {
  const p = new Product(req.body);
  await p.save();
  res.json(p);
});

// PUT update product
router.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
