import fastify from "fastify";

const app = fastify()

app.get("/", (req, res) => {
    return res.status(200).send({mensagem:"hello"})
})

app.listen({port:3333}, () => console.log("server online in port 3333"))