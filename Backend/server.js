import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/mongodb.js";
import "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();

// ---------------- MIDDLEWARE ----------------
app.use(express.json());

const allowedOrigins = [
  "https://forever-clothing-henna.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];

// ✅ FIXED PREFLIGHT (modern Express)
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  credentials: true
}
));

// ---------------- DATABASE ----------------
connectDB();

// ---------------- ROUTES ----------------
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING!");
});

// ---------------- SERVER ----------------
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
