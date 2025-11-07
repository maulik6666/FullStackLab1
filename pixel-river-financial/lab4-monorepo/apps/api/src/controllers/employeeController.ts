import type { Request, Response, NextFunction } from "express";
import { employeesService } from "../services/employee";

export const employeesController = {
  list: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await employeesService.list();
      res.json(data);
    } catch (e) { next(e); }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, department, roleId } = req.body;
      const created = await employeesService.create({ name, department, roleId });
      res.status(201).json(created);
    } catch (e) { next(e); }
  },
  remove: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await employeesService.remove(id);
      res.status(204).send();
    } catch (e) { next(e); }
  }
};