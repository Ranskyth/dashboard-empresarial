import { FastifyReply, FastifyRequest } from "fastify";

export const getAllProducts = async (req:FastifyRequest, res:FastifyReply) => {
    return res.status(200).send("oii")
}