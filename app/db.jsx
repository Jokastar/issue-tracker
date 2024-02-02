import { PrismaClient } from "@prisma/client";

export default async function createUser() {
  const prisma = new PrismaClient();

  try {
    await prisma.issue.create({
      data: {
        title: "first issue",
        description: "testing the db",
      },
    });

    const allIssues = await prisma.issue.findMany();
    console.log(allIssues);
  } catch (error) {
    console.log(error);
  } 
}
