import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const electionRoute = new Hono();
const prisma = new PrismaClient();

electionRoute.post("/Vote", async (c) => {
    // ! change to req cookie later
    try {
        const student_id = "65130500217";
        const body = await c.req.json();
        const election_id = parseInt(body.election_id);
        const candidate_id = parseInt(body.candidate_id);

        const voteRight = await prisma.voteLog.findFirst({
            where: {
                student_id: student_id,
                election_id: election_id
            }
        })

        if (voteRight !== null) return c.json("You have already voted", 404)

        await prisma.voteLog.create({
            data: {
                student_id: student_id,
                election_id: election_id,
            }
        })

        const openvote = await prisma.voteCandidate.findFirst({
            where: {
                election_id: election_id,
                candidate_id: candidate_id
            }
        })

        if (openvote === null) {
            await prisma.voteCandidate.create({
                data: {
                    election_id: election_id,
                    candidate_id: candidate_id,
                    score: 0
                }
            })
        }

        const score = await prisma.voteCandidate.findFirst({
            where: {
                election_id: election_id,
                candidate_id: candidate_id
            },
            select: {
                score: true
            }
        })

        if (score === null) return c.json("Candidate not found", 404)

        const vote = await prisma.voteCandidate.update({
            where: {
                election_id_candidate_id: {
                    election_id: election_id,
                    candidate_id: candidate_id
                }
            },
            data: {
                score: score.score + 1
            }
        })

        return c.json(vote);
    } catch(e) {
        console.log(e)
        return c.json("Vote error", 404)
    }
})

export default electionRoute;
