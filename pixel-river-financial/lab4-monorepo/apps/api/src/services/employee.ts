import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const employeesService = {
  list: () => prisma.employee.findMany({ include: { role: true } }),
  create: (data: { name: string; department: string; roleId?: number | null }) =>
    prisma.employee.create({ data }),
  remove: (id: number) => prisma.employee.delete({ where: { id } }),
};