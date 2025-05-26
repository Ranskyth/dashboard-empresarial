import { FastifyReply, FastifyRequest } from "fastify"
import { client } from "../prisma/client"
import { z } from "zod"

const LoginSchema = z.object({
    email: z.string(),
    password: z.string(),
})

export const Login = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    const { email, password } = LoginSchema.parse(req.body)

    const user = await client.users.findUnique({ where: {email} })

    if (!user) {
        return res.status(404).send({ error: "Email Não Cadastrado" })
    }

    const userPassword = user.password == password

    if (!userPassword) {
        return res.status(404).send({ error: "Senha invalida" })
    }

    try {
        const token = req.server.jwt.sign({ id: user.id })
        return res.status(200).setCookie("token", token, {
            httpOnly: true,
            secure: false,
            path: "/"
        }).send({ status: "ok" })
    } catch (error) {
        return res.status(400).send({ error: error })
    }
}

export const Cadastro = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {

}

export const Logout = (req: FastifyRequest, res: FastifyReply) => {
    return res.status(200).clearCookie("token").send({ mensagem: "logout sucess" })
}