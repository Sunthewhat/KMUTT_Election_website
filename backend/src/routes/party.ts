import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const partyRoute = new Hono();
const prisma = new PrismaClient();

partyRoute.get("/login", async (c) => {
   
    // return c.json()
    return c.text("Hello");

});

export default partyRoute;
