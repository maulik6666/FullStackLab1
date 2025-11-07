import { z } from "zod";
export const createRoleSchema = z.object({
  body: z.object({ title: z.string().min(2) }),
});