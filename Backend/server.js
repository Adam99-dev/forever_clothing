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
const server = http.createServer(app); // 👈 IMPORTANT

app.use(express.json());

const allowedOrigins = [
  "https://forever-clothing-henna.vercel.app",
  "http://localhost:5173",
];

// REST API CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// 🔌 SOCKET.IO SETUP
const io = new Server(server, {
  cors: {
    origin: "*", // Electron has no origin
  },
});

io.on("connection", (socket) => {
  console.log("🟢 Socket connected:", socket.id);
});

// Make io accessible in routes/controllers
app.set("io", io);

const port = process.env.PORT || 5000;

connectDB();

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API IS WORKING!");
});

// 👇 IMPORTANT: use server.listen NOT app.listen
server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
