import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const eligibleRoute = new Hono();
const prisma = new PrismaClient();

eligibleRoute.get("/check-rights", async (c) => {
  const isEligible = await prisma.eligible.findUnique({
    where: {
      student_id: "34130500205",
    },
    select: {
      student_id: true,
      prefix: true,
      firstname: true,
      lastname: true,
    },
  });
  if (isEligible) {
    return c.json({ isEligible: true, ...isEligible }, 200);
  } else {
    return c.json(
      {
        isEligible: false,
        student_id: "",
        prefix: "",
        firstname: "",
        lastname: "",
      },
      204
    );
  }
});

export default eligibleRoute;
