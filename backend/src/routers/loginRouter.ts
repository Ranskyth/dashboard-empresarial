import { FastifyInstance } from "fastify";
import { verifyJwt } from "../auth";
import { Cadastro, Login, Logout } from "../controllers/loginController";

export const loginRouter = (app: FastifyInstance) => {
    app.post("/login", Login)
    app.post("/cadastro", {preHandler: verifyJwt} ,Cadastro)
    app.get("/logout", { preHandler: verifyJwt }, Logout)
}
