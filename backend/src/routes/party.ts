import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const partyRoute = new Hono();
const prisma = new PrismaClient();

partyRoute.get("/all", async (c) => {
  const body = await c.req.json();

  const partyList = await prisma.party.findMany({
    where: {
      election_id: body.election_id,
    },
    select: {
      no: true,
      name: true,
      abbreviate: true,
      amount: true,
      symbol: true,
      group_image: true,
    },
  });
  return c.json(partyList);
});

export default partyRoute;
