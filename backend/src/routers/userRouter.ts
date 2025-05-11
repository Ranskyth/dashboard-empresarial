import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { verifyJwt } from "../auth";
import { client } from "../prisma/client";

interface jwtType {
    id: number
}

export const userRouter = (app:FastifyInstance) => {
    app.get("/user", {preHandler: verifyJwt}, async (req:FastifyRequest, res:FastifyReply) => {
        const decode:jwtType = await req.jwtVerify(req.cookies)

        console.log(decode.id)

        const user = await client.users.findUnique({where:{id:Number(decode.id)}})
        
        return res.status(200).send(user)
    })
}