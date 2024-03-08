import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const candidateRoute = new Hono();
const prisma = new PrismaClient();

candidateRoute.get("/AllCandidateTH", async (c) => {
   
    const candidateList = await prisma.candidate.findMany({
        select: {
            firstname: true,
            lastname: true,
            student_id: true,
            faculty: true,
            image_url: true
        }
    })
    return c.json(candidateList)
});

candidateRoute.get("/AllCandidateEN", async (c) => {

    const candidateList = await prisma.candidateEng.findMany({
        include: {
            Candidate: {
                select: {
                    student_id: true,
                    image_url: true
                }
            }
        },
    })
    return c.json(candidateList)
});

export default candidateRoute;
