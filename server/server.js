import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// ── Load .env FIRST before anything else ──────────────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, ".env") }); // explicit path — no guessing

// Debug: remove after confirming it works
console.log("ENV CHECK →", {
  PORT: process.env.PORT,
  RESEND_API_KEY: process.env.RESEND_API_KEY ? "✅ loaded" : "❌ MISSING",
  MY_EMAIL: process.env.MY_EMAIL ? "✅ loaded" : "❌ MISSING",
  MONGO_URI: process.env.MONGO_URI ? "✅ loaded" : "❌ MISSING",
});

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const clientOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:3000",
  "https://portfolio-ayush-g8a8.onrender.com",
].filter(Boolean);

console.log("CORS origins:", clientOrigins);

app.use(
  cors({
    origin: clientOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Ayush Poddar Portfolio API is running 🚀" });
});

app.use("/api", contactRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
