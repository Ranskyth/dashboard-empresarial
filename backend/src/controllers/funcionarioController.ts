import { FastifyReply, FastifyRequest } from "fastify"
import { client } from "../prisma/client"

export const getFuncionarios = async (req:FastifyRequest, res:FastifyReply) => {
    try {
        const db = await client.funcionarios.findMany()
        res.status(200).send(db)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export const createFuncionario = async(req:FastifyRequest, res:FastifyReply) => {

}