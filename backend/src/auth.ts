import { FastifyReply, FastifyRequest } from "fastify";

export const verifyJwt = async (req: FastifyRequest, res: FastifyReply) => {
    const { token } = req.cookies
    console.log(token)
    if (!token) return res.status(401).send({ mensagem: "nenhum token no request" })

    try {
        await req.jwtVerify({})
    } catch (error) {
        res.status(400).send({ error: `error in : ${error}` })
    }
}

