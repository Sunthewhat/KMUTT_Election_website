import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const authRoute = new Hono();
const prisma = new PrismaClient();

authRoute.get("/login", async (c) => {
   
    // return c.json()
    return c.text("Hello");

});

export default authRoute;
