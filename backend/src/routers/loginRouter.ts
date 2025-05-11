import { FastifyInstance } from "fastify";
import { verifyJwt } from "../auth";

export const loginRouter = (app: FastifyInstance) => {
    app.post("/login", (req, res) => {
        const { email, password } = req.body as { email: string, password: string }

        if (email == "admin@gmail.com" && password == "1234") {
            const token = app.jwt.sign({ id: 1, nome: "admin", email: "admin@gmail.com", avatar: "https://github.com/ranskyth.png" })
            return res.status(200).setCookie('token', token, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"

            }).send({ status: "ok" })
        } else {
            return res.status(400).send({ mensagem: "error in login" })
        }
    })

    app.get("/logout", { preHandler: verifyJwt }, (req, res) => {
        return res.status(200).clearCookie("token").send({ mensagem: "logout sucess" })

    })
}
