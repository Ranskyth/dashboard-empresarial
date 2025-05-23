import { FastifyReply, FastifyRequest } from "fastify";
import { client } from "../prisma/client";
import { number, z } from "zod";


const Product = z.object({
    nome: z.string(),
    categoria: z.string(),
    preco:z.number(),
    estoque:z.number(),
    status:z.string(),
    imagem:z.string(),
    cores:z.string(),
    tamanhos:z.string(),
    descricao:z.string()
})

export const getAllProducts = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const db = await client.products.findMany({})
        return res.status(200).send(db)
    } catch (error) {
        return res.status(401).send({ mensagem: error})
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

export const createProducts = async (req: FastifyRequest, res: FastifyReply) => {
    try {

        const {tamanhos, categoria,cores,descricao,estoque,imagem,nome,preco,status} = Product.parse(req.body)

        await client.products.create({data:{cores, estoque,imagem,nome,preco,tamanhos,categoria,descricao}})

        return res.status(201).send({mensagem:"produto cadastrado"})

    } catch (error) {
        return res.status(400).send({"error":error})
    }
}

export const getQtProducts = async (req: FastifyRequest, res: FastifyReply) => {
    const db = await client.products.findMany()

    res.status(200).send({quantidade : `${db.length}`})
}

export const updateProducts = (req: FastifyRequest, res: FastifyReply) => {

}

export const deleteProducts = (req: FastifyRequest, res: FastifyReply) => {

}