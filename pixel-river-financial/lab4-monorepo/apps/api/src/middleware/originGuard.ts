import type { Request, Response, NextFunction } from "express";

export const originGuard = (allowed: string[]) => {
  const allowAllInDev = process.env.NODE_ENV !== "production";
  return (req: Request, res: Response, next: NextFunction) => {
    if (allowAllInDev) return next();
    const origin = req.headers.origin || "";
    if (!origin || allowed.includes(origin)) return next();
    return res.status(403).json({ error: "Forbidden origin" });
  };
};