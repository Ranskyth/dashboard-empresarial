import { FastifyReply, FastifyRequest } from "fastify";
import { client } from "../prisma/client";
import { number } from "zod";


export const getAllProducts = async (req: FastifyRequest, res: FastifyReply) => {
    try {
        const db = await client.products.findMany({})
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
//{"nome":"aaaa","categoria":"ssdqwd","preco":"wdwe","estoque":"wewd","status":"ewdw","imagem":"aaaa1","cores":"dfwefdwe","tamanho":"dwedw","descricao":"dwedwed"}
export const createProducts = async (req: FastifyRequest, res: FastifyReply) => {
    try {
     
        const {nome,categoria,cores,descricao,tamanho,estoque,imagem,preco,status} = req.body as {nome: string, categoria:string; preco:string, estoque:string, status:string; imagem:string, cores:string, tamanho:string, descricao:string}

        await client.products.create({data:{cores,estoque:Number(estoque),imagem,nome,preco:Number(preco),tamanhos:tamanho,categoria}})

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