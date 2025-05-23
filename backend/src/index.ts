import fastify from "fastify";
import { productRouter } from "./routers/productRouter";
import { FRONTEND_URL, PORT, HOST, SECRET_KEY } from "./config/config";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import { loginRouter } from "./routers/loginRouter";
import fastifyCookie from "@fastify/cookie";
import { userRouter } from "./routers/userRouter";

const app = fastify()

app.register(fastifyCors, {
    origin: FRONTEND_URL,
    credentials: true,
    methods:"*"
})

app.register(fastifyCookie)
app.register(productRouter)
app.register(userRouter)
app.register(loginRouter)
app.register(fastifyJwt,
    {
        secret: String(SECRET_KEY), cookie:
            { cookieName: "token", signed: false }
    }
)

app.listen({ host:HOST,port: Number(PORT) }, () => console.log(`server on in Host : ${HOST} and port : ${PORT}`))