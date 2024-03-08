import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const eligibleRoute = new Hono();
const prisma = new PrismaClient();

eligibleRoute.get("/geteligible", async (c) => {
    const eligibleList = await prisma.eligible.findMany({select: {
        id: true,
        firstname: true
    }})
    return c.json(eligibleList)
});

export default eligibleRoute;
