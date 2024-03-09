import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const partyRoute = new Hono();
const prisma = new PrismaClient();

partyRoute.get("/all-party/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const partyList = await prisma.party.findMany({
    where: {
      election_id: id,
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
partyRoute.get("/all-party-eng/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const partyList = await prisma.party.findMany({
    where: {
      election_id: id,
    },
    select: {
      no: true,
      name_eng: true,
      abbreviate: true,
      amount: true,
      symbol: true,
      group_image: true,
    },
  });
  return c.json(partyList);
});

partyRoute.get("party-info/:id", async (c) => {
  const party_id = parseInt(c.req.param("id"));
  const party = await prisma.party.findUnique({
    where: {
      id: party_id,
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
  return c.json(party);
});

partyRoute.get("/party-info-eng/:id", async (c) => {
  const party_id = parseInt(c.req.param("id"));

  const party = await prisma.party.findUnique({
    where: {
      id: party_id,
    },
    select: {
      no: true,
      name_eng: true,
      abbreviate: true,
      amount: true,
      symbol: true,
      group_image: true,
    },
  });
  return c.json(party);
});

export default partyRoute;
