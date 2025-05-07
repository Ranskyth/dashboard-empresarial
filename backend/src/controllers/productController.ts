import { FastifyReply, FastifyRequest } from "fastify";

export const getAllProducts = async (req:FastifyRequest, res:FastifyReply) => {
    try {
        return res.status(200).send({mensagem:"oii"})
    } catch (error) {
        return res.status(401).send({mensagem:"não autorizado"})
    }
}