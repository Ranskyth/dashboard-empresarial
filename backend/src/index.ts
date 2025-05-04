import fastify from "fastify";

import { productRouter } from "./routers/productRouter";
import { PORT } from "./config/config";

const app = fastify()
app.register(productRouter)


app.listen({port:Number(PORT)}, () => console.log(`server online in port ${PORT}`))