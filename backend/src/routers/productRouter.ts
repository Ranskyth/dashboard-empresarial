import { FastifyInstance } from "fastify"
import { getAllProducts } from "../controllers/productController"

export const productRouter = (app:FastifyInstance) => {
    app.get("/products", getAllProducts)
}