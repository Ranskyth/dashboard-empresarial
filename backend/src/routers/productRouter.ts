import { FastifyInstance } from "fastify"
import { getAllProducts } from "../controllers/productController"
import { verifyJwt } from "../auth"

export const productRouter = (app:FastifyInstance) => {
    app.get("/products", {preHandler: verifyJwt} , getAllProducts)
}