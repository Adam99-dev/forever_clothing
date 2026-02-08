import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

import connectDB from "./config/mongodb.js";
import "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

// ---------------- MIDDLEWARE ----------------
app.use(express.json());

const allowedOrigins = [
  "https://forever-clothing-henna.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];

// 🔐 REST API CORS (FIXED)
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server, Postman, Electron
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    credentials: true,
  })
);

// 🔥 REQUIRED: handle preflight requests
app.options("*", cors());

// ---------------- SOCKET.IO ----------------
const io = new Server(server, {
  cors: {
    origin: "*", // Electron / Admin app
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("🟢 Socket connected:", socket.id);
});

// Make io accessible inside controllers
app.set("io", io);

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

server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
