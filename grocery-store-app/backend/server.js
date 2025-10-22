import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import salesRoutes from "./routes/sales.js";
import khataRoutes from "./routes/khata.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/khata", khataRoutes);

app.get("/", (req, res) => res.send("Grocery Store API is running"));

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/grocery";
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo connect error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
