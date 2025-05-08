import { FastifyReply, FastifyRequest } from "fastify";
import { client } from "../prisma/client";


export const getAllProducts = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const db = await client.products.findMany()
        return res.status(200).send(db)
    } catch (error) {
        return res.status(401).send({ mensagem: "não autorizado" })
    }
}

export const getByIdProducts = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const { id } = await req.params as { id: number }
        const db = await client.products.findUnique({ where: { id: Number(id) } })
        return res.status(200).send(db)
    } catch {
        return res.status(400).send({ mensagem: "error" })
    }
}

export const createProducts = (req: FastifyRequest, res: FastifyReply) => {

}

export const getQtProducts = async (req: FastifyRequest, res: FastifyReply) => {
    const db = await client.products.findMany()

    res.status(200).send({quantidade : `${db.length}`})
}

export const updateProducts = (req: FastifyRequest, res: FastifyReply) => {

}

export const deleteProducts = (req: FastifyRequest, res: FastifyReply) => {

}