import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const candidateRoute = new Hono();
const prisma = new PrismaClient();

type Prefix = "Mr" | "Ms" | "Mrs";

function mapPrefixToThai(prefix: Prefix): Prefix {
    switch(prefix) {
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
   
    const candidateList = await prisma.candidate.findMany({
        select: {
            id: true,
            application_no: true,
            prefix: true,
            firstname: true,
            lastname: true,
            student_id: true,
            faculty: true,
            image_url: true
        }
    })

    candidateList.forEach((candidate) => {
        candidate.prefix = mapPrefixToThai(candidate.prefix);
    })
    
    return c.json(candidateList)
});

candidateRoute.get("/AllCandidateEN", async (c) => {

    const candidateList = await prisma.candidateEng.findMany({
        select: {
            id: true,
            prefix: true,
            firstname: true,
            lastname: true,
            faculty: true,
        }
    })

    const candidateENG = await Promise.all(candidateList.map(async (candidate) => {
        const fk = await prisma.candidateEng.findFirst({
            where: {
                id: candidate.id
            },
            include: {
                Candidate: {
                    select: {
                        application_no: true,
                        student_id: true,
                        image_url: true
                    }
                }
            }
        })
        return {
            ...candidate,
            application_no: fk?.Candidate.application_no,
            student_id: fk?.Candidate.student_id,
            image_url: fk?.Candidate.image_url
        }
    }))

    return c.json(candidateENG)
});

candidateRoute.get("/CandidateTH/:id", async (c) => {
    const id = parseInt(c.req.param('id'));

    const candidate = await prisma.candidate.findFirst({
        where: {
            id: id
        },
        select: {
            application_no: true,
            prefix: true,
            firstname: true,
            lastname: true,
            student_id: true,
            major: true,
            department: true,
            faculty: true,
            year: true,
            image_url: true,
            election_id: true,
        }
    })

    if (candidate) {
        candidate.prefix = mapPrefixToThai(candidate.prefix);
    } else {
        return c.text("Candidate not found", 404);
    }

    const question = await prisma.question.findMany({
        where: {
            election_id: candidate?.election_id
        },
        select: {
            id: true,
            topic: true,
            question: true,
            description: true,
        }
    })

    const qa = await Promise.all(question.map(async (q) => {
        const answer = await prisma.answer.findFirst({
            where: {
                candidateId: id,
                question_id: q.id
            },
            select: {
                answer: true
            }
        })
        return {
            ...q,
            answer: answer?.answer
        }
    }))

    return c.json({
        candidate,
        "policy": qa
    })
})

candidateRoute.get("/CandidateEN/:id", async (c) => {
    const id = parseInt(c.req.param('id'));

    const candidate = await prisma.candidateEng.findFirst({
        where: {
            id: id
        },
        select: {
            prefix: true,
            firstname: true,
            lastname: true,
            major: true,
            department: true,
            faculty: true,
            candidate_id: true,
        }
    })

    const detail = await prisma.candidate.findFirst({
        where: {
            id: candidate?.candidate_id
        },
        select: {
            year: true,
            application_no: true,
            student_id: true,
            image_url: true,
            election_id: true
        }
    })

    const candidateENG = {
        ...candidate,
        application_no: detail?.application_no,
        student_id: detail?.student_id,
        image_url: detail?.image_url
    }

    const question = await prisma.question.findMany({
        where: {
            election_id: detail?.election_id
        },
        select: {
            id: true,
            topic: true,
            question: true,
            description: true,
        }
    })

    const qa = await Promise.all(question.map(async (q) => {
        const answer = await prisma.answer.findFirst({
            where: {
                candidateId: candidate?.candidate_id,
                question_id: q.id
            },
            select: {
                answer: true
            }
        })
        return {
            ...q,
            answer: answer?.answer
        }
    }))

    return c.json({
        "candidate": candidateENG,
        "policy": qa
    })
})

candidateRoute.post("/CheckVoteType", async (c) => {
    try {
        // ! not sure if this is the correct way to get the body
        const body = await c.req.json();
        const election_id = parseInt(body.election_id);

        const candidateList = await prisma.candidate.findMany({
            where: {
                election_id: election_id
            },
            select: {
                id: true,
                application_no: true,
                firstname: true,
                faculty: true // Selecting the faculty column
            }
        });

        const facultyCount: Record<string, number> = {};

        candidateList.forEach((candidate) => {
            const facultyName = candidate.faculty;
            facultyCount[facultyName] = (facultyCount[facultyName] || 0) + 1;
        });

        const vote_type = await Promise.all(
            candidateList.map(async (candidate) => {
                const facultyName = candidate.faculty;
                var type = "";

                if (facultyCount[facultyName] === 1) {
                    await prisma.candidate.update({
                        where: { id: candidate.id },
                        data: { vote_type: "Approve" }
                    });
                    type = "Approve";
                } else {
                    await prisma.candidate.update({
                        where: { id: candidate.id },
                        data: { vote_type: "Vote" }
                    });
                    type = "Vote";
                }

                return {
                    ...candidate,
                    "vote_type": type
                }
            })
        );

        return c.json(vote_type);
    } catch (error) {
        return c.json("Error occurred", 404);
    }
});

export default candidateRoute;
