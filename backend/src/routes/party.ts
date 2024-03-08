import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const partyRoute = new Hono();
const prisma = new PrismaClient();

partyRoute.get("/login", async (c) => {
    const eligibleList = await prisma.eligible.findMany({select: {
        id: true,
        firstname: true
    }})
    return c.json(eligibleList)

});

export default partyRoute;
