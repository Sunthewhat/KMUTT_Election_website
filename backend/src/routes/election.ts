import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const electionRoute = new Hono();
const prisma = new PrismaClient();

export default electionRoute;
