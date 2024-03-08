import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const eligibleRoute = new Hono();
const prisma = new PrismaClient();

// eligibleRoute.get("/geteligible", async (c) => {
//   const eligibleList = await prisma.eligible.findMany({
//     select: {
//       id: true,
//       firstname: true,
//     },
//   });
//   return c.json(eligibleList);
// });

eligibleRoute.get("/check-rights", async (c) => {
  const isEligible = await prisma.eligible.findUnique({
    where: {
      id: 65130500205,
    },
    select: {
      student_id: true,
      prefix: true,
      firstname: true,
      lastname: true,
    },
  });
  if (isEligible) {
    return c.json({ isEligible: true, ...isEligible });
  } else {
    return c.json({
      isEligible: false,
      prefix: "",
      firstname: "",
      lastname: "",
    });
  }
});

export default eligibleRoute;
