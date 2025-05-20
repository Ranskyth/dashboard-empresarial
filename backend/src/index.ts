import fastify from "fastify";
import { productRouter } from "./routers/productRouter";
import { PORT } from "./config/config";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import { loginRouter } from "./routers/loginRouter";
import fastifyCookie from "@fastify/cookie";
import { userRouter } from "./routers/userRouter";

const app = fastify()

app.register(fastifyCors, {
    origin: "http://localhost:3001",
    credentials: true,
    methods:"*"
})

app.register(fastifyCookie)
app.register(productRouter)
app.register(userRouter)
app.register(loginRouter)
app.register(fastifyJwt,
    {
        secret: "secret", cookie:
            { cookieName: "token", signed: false }
    }
)

app.listen({ port: Number(PORT) }, () => console.log(`server on in port ${PORT}`))