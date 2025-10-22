import express from "express";
import Khata from "../models/Khata.js";
const router = express.Router();

// get all khatas
router.get("/", async (req, res) => {
  const list = await Khata.find().sort({ customerName: 1 });
  res.json(list);
});

// create or add entry to khata
router.post("/", async (req, res) => {
  // either create new khata if customerName provided with no id, or add to existing by id
  const { khataId, customerName, entry } = req.body;
  // entry = { type: "credit"|"debit", amount, note }
  let k;
  if (khataId) {
    k = await Khata.findById(khataId);
    if (!k) return res.status(404).json({ error: "Khata not found" });
    k.entries.push(entry);
  } else {
    k = new Khata({ customerName, entries: [entry] });
  }
  // update balance: credit increases amount owed, debit reduces
  if (entry.type === "credit") k.balance += entry.amount;
  else k.balance -= entry.amount;
  await k.save();
  res.json(k);
});

export default router;
