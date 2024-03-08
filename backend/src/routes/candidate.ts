import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const candidateRoute = new Hono();
const prisma = new PrismaClient();

candidateRoute.get("/login", async (c) => {
   
    // return c.json()
    return c.text("Hello");

});

export default candidateRoute;
