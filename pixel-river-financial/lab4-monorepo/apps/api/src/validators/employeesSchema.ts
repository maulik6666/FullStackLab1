import { z } from "zod";
export const createEmployeeSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    department: z.string().min(2),
    roleId: z.number().int().optional().nullable(),
  }),
});