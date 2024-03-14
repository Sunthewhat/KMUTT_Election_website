import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const candidateRoute = new Hono();
const prisma = new PrismaClient();

type Prefix = "Mr" | "Ms" | "Mrs";

function mapPrefixToThai(prefix: Prefix): Prefix {
  switch (prefix) {
    case "Mr":
      return "นาย" as Prefix;
    case "Ms":
      return "นางสาว" as Prefix;
    case "Mrs":
      return "นาง" as Prefix;
    default:
      return prefix;
  }
}

candidateRoute.get("/AllCandidateTH", async (c) => {
  // const body = await c.req.json();
  // const election_id = parseInt(body.election_id);
  const election_id = 5;

  const candidateList = await prisma.candidate.findMany({
    where: {
      election_id: election_id,
    },
    select: {
      id: true,
      application_no: true,
      prefix: true,
      firstname: true,
      lastname: true,
      student_id: true,
      faculty: true,
      image_url: true,
    },
  });

  candidateList.forEach((candidate) => {
    candidate.prefix = mapPrefixToThai(candidate.prefix);
  });

  return c.json(candidateList);
});

candidateRoute.get("/AllCandidateEN", async (c) => {
  // const body = await c.req.json();
  // const election_id = parseInt(body.election_id);
  const election_id = 5;

  const candidateId = await prisma.candidate.findMany({
    where: {
      election_id: election_id,
    },
    select: {
      id: true,
      application_no: true,
      student_id: true,
      image_url: true,
    },
  });

  const candidateENG = await Promise.all(
    candidateId.map(async (candidate) => {
      const eng = await prisma.candidateEng.findFirst({
        where: {
          candidate_id: candidate.id,
        },
        select: {
          prefix: true,
          firstname: true,
          lastname: true,
          faculty: true,
        },
      });
      return {
        ...candidate,
        prefix: eng?.prefix,
        firstname: eng?.firstname,
        lastname: eng?.lastname,
        faculty: eng?.faculty,
      };
    })
  );

  return c.json(candidateENG);
});

candidateRoute.get("/CandidateTH/:id", async (c) => {
  const id = parseInt(c.req.param("id"));

  const candidate = await prisma.candidate.findFirst({
    where: {
      id: id,
    },
    select: {
      application_no: true,
      prefix: true,
      firstname: true,
      lastname: true,
      nickname: true,
      student_id: true,
      major: true,
      department: true,
      faculty: true,
      year: true,
      image_url: true,
      election_id: true,
    },
  });

  if (candidate) {
    candidate.prefix = mapPrefixToThai(candidate.prefix);
  } else {
    return c.text("Candidate not found", 404);
  }

  const question_id = [4, 5, 6, 7, 8, 9, 10];

  const question = await prisma.question.findMany({
    where: {
      election_id: candidate?.election_id,
      id: {
        in: question_id,
      },
    },
    select: {
      id: true,
      question: true,
    },
  });

  const qa = await Promise.all(
    question.map(async (q) => {
      const answer = await prisma.answer.findFirst({
        where: {
          candidateId: id,
          question_id: q.id,
        },
        select: {
          answer: true,
        },
      });
      return {
        ...q,
        answer: answer?.answer,
      };
    })
  );

  return c.json({
    candidate,
    question: qa,
  });
});

candidateRoute.get("/CandidateEN/:id", async (c) => {
  const election_id = 5;
  const id = parseInt(c.req.param("id"));

  const detail = await prisma.candidate.findFirst({
    where: {
      id: id,
      election_id: election_id,
    },
    select: {
      id: true,
      year: true,
      application_no: true,
      student_id: true,
      image_url: true,
      election_id: true,
    },
  });

  const candidate = await prisma.candidateEng.findFirst({
    where: {
      candidate_id: detail?.id,
    },
    select: {
      prefix: true,
      firstname: true,
      lastname: true,
      nickname: true,
      major: true,
      department: true,
      faculty: true,
      candidate_id: true,
    },
  });

  const candidateENG = {
    ...candidate,
    application_no: detail?.application_no,
    student_id: detail?.student_id,
    image_url: detail?.image_url,
  };

  const question_id = [4, 5, 6, 7, 8, 9, 10];

  const question = await prisma.question.findMany({
    where: {
      election_id: detail?.election_id,
      id: {
        in: question_id,
      },
    },
    select: {
      id: true,
      question: true,
    },
  });

  const qa = await Promise.all(
    question.map(async (q) => {
      const answer = await prisma.answer.findFirst({
        where: {
          candidateId: candidate?.candidate_id,
          question_id: q.id,
        },
        select: {
          answer: true,
        },
      });
      return {
        ...q,
        answer: answer?.answer,
      };
    })
  );

  return c.json({
    candidate: candidateENG,
    question: qa,
  });
});

candidateRoute.post("/CheckVoteType", async (c) => {
  try {
    // ! not sure if this is the correct way to get the body
    const body = await c.req.json();
    const election_id = parseInt(body.election_id);

    const candidateList = await prisma.candidate.findMany({
      where: {
        election_id: election_id,
      },
      select: {
        id: true,
        application_no: true,
        firstname: true,
        faculty: true, // Selecting the faculty column
      },
    });

    const facultyCount: Record<string, number> = {};

    candidateList.forEach((candidate) => {
      const facultyName = candidate.faculty;
      facultyCount[facultyName] = (facultyCount[facultyName] || 0) + 1;
    });

    const vote_type = await Promise.all(
      candidateList.map(async (candidate) => {
        const facultyName = candidate.faculty;
        let type = "";

        if (facultyCount[facultyName] === 1) {
          await prisma.candidate.update({
            where: { id: candidate.id },
            data: { vote_type: "Approve" },
          });
          type = "Approve";
        } else {
          await prisma.candidate.update({
            where: { id: candidate.id },
            data: { vote_type: "Vote" },
          });
          type = "Vote";
        }

        return {
          ...candidate,
          vote_type: type,
        };
      })
    );

    return c.json(vote_type);
  } catch (error) {
    return c.json("Error occurred", 404);
  }
});

export default candidateRoute;
