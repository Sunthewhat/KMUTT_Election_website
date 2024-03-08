import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const electionRoute = new Hono();
const prisma = new PrismaClient();

electionRoute.get("/geteligible", async (c) => {
  const eligibleList = await prisma.eligible.findMany({
    select: {
    //   id: true,
      firstname: true,
    },
  });
  return c.json(eligibleList);
});

export default electionRoute;
