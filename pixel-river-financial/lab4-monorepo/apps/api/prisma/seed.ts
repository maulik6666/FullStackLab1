import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const ceo = await prisma.role.upsert({
    where: { title: "CEO" }, update: {}, create: { title: "CEO" }
  });
  const cto = await prisma.role.upsert({
    where: { title: "CTO" }, update: {}, create: { title: "CTO" }
  });
  const hrm = await prisma.role.upsert({
    where: { title: "HR Manager" }, update: {}, create: { title: "HR Manager" }
  });

  await prisma.employee.createMany({
    data: [
      { name: "Alice Johnson", department: "Finance", roleId: ceo.id },
      { name: "Bob Smith", department: "Technology", roleId: cto.id },
      { name: "Carol Lee", department: "Human Resources", roleId: hrm.id },
      { name: "David Kim", department: "Technology" },
      { name: "Eva Patel", department: "Finance" }
    ],
    skipDuplicates: true
  });
}

main().then(async () => {
  await prisma.$disconnect();
  console.log("Seeded ✅");
}).catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});