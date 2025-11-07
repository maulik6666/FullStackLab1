import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const rolesService = {
  list: () => prisma.role.findMany({ include: { employees: true } }),
  create: (data: { title: string }) => prisma.role.create({ data }),
  isFilled: async (title: string) => {
    const role = await prisma.role.findUnique({ where: { title }, include: { employees: true } });
    return !!role && role.employees.length > 0;
  },
};