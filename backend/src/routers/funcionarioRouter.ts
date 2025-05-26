import { FastifyInstance } from "fastify";
import { getFuncionarios } from "../controllers/funcionarioController";
import { verifyJwt } from "../auth";

export const funcionarioRouter = (app: FastifyInstance) =>{
    app.get("/funcionarios", {preHandler: verifyJwt}, getFuncionarios)
}