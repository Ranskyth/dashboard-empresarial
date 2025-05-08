import { FastifyInstance } from "fastify"
import { createProducts, deleteProducts, getAllProducts, getByIdProducts, getQtProducts, updateProducts } from "../controllers/productController"
import { verifyJwt } from "../auth"

export const productRouter = (app: FastifyInstance) => {
    app.get("/products", { preHandler: verifyJwt }, getAllProducts)
    app.get("/products/qt", { preHandler: verifyJwt }, getQtProducts)
    app.get("/products/:id", { preHandler: verifyJwt }, getByIdProducts)
    app.post("/products", { preHandler: verifyJwt }, createProducts)
    app.put("/products/:id", { preHandler: verifyJwt }, updateProducts)
    app.delete("/products/:id", { preHandler: verifyJwt }, deleteProducts)
}