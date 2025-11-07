import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import { originGuard } from "./middleware/originGuard";
import { errorHandler } from "./middleware/errorHandler";
import employeesRouter from "./routes/employeesRoutes";
import rolesRouter from "./routes/rolesRoutes";

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
app.use(cors({ origin: [FRONTEND_ORIGIN], credentials: false }));
app.use(originGuard([FRONTEND_ORIGIN, "http://localhost:5173", "http://localhost:3000"]));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/employees", employeesRouter);
app.use("/api/roles", rolesRouter);

app.use(errorHandler);
export default app;