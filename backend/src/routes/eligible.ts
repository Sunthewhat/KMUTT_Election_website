import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const eligibleRoute = new Hono();
const prisma = new PrismaClient();

eligibleRoute.get("/check-rights", async (c) => {
  const student_id = "65130500205";
  const isEligible = await prisma.eligible.findUnique({
    where: {
      student_id: student_id,
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
      200
    );
  }
});

eligibleRoute.get("/check-rights-eng", async (c) => {
  const student_id = "65130500205";
  const isEligible = await prisma.eligible.findUnique({
    where: {
      student_id: student_id,
    },
    select: {
      student_id: true,
      prefix_eng: true,
      firstname_eng: true,
      lastname_eng: true,
    },
  });
  if (isEligible) {
    return c.json({ isEligible: true, ...isEligible }, 200);
  } else {
    return c.json(
      {
        isEligible: false,
        student_id: "",
        prefix_eng: "",
        firstname_eng: "",
        lastname_eng: "",
      },
      200
    );
  }
});

eligibleRoute.post("/waive-rights", async (c) => {
  const body = await c.req.json();
  const student_id = "35130500205";
  const existingWaiver = await prisma.waiver.findFirst({
    where: {
      election_id: body.election_id,
      student_id: student_id, // Hardcoded student_id for now, you can change it if needed
    },
  });

  if (existingWaiver) {
    return c.json(
      {
        success: false,
        message:
          "This student already waive their right to vote for this election",
      },
      400
    );
  }
  try {
    await prisma.waiver.create({
      data: {
        election_id: body.election_id,
        student_id: student_id,
      },
    });
    return c.json({ success: true, message: "Waiving successful." }, 201);
  } catch (e) {
    return c.json({ success: false, message: "Waiving unsuccessful." }, 500);
  }
});

export default eligibleRoute;
