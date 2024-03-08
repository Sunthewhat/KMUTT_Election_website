import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const authRoute = new Hono();
const prisma = new PrismaClient();

authRoute.get("/login", async (c) => {
   
    const eligibleList = await prisma.eligible.findMany({select: {
        id: true,
        firstname: true
    }})
    return c.json(eligibleList)

});

export default authRoute;
