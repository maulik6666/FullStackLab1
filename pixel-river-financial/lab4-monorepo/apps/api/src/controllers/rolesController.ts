import type { Request, Response, NextFunction } from "express";
import { rolesService } from "../services/roles";

export const rolesController = {
  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await rolesService.list();
      res.json(data);
    } catch (e) { next(e); }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { title } = req.body;
      const created = await rolesService.create({ title });
      res.status(201).json(created);
    } catch (e) { next(e); }
  },
  isFilled: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const title = String(req.query.title || "");
      const filled = await rolesService.isFilled(title);
      res.json({ title, filled });
    } catch (e) { next(e); }
  },
};