import fastify from "fastify";
import { productRouter } from "./routers/productRouter";

const app = fastify()
app.register(productRouter)


app.listen({port:3333}, () => console.log("server online in port 3333"))