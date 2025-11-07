import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
app.use(cors({ origin: [FRONTEND_ORIGIN], credentials: false }));

app.get("/health", (_req, res) => res.json({ ok: true }));

export default app;