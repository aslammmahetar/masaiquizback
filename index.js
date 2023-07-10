const jsonserver = require("json-server")
const server = jsonserver.create()
const router = jsonserver.router("db.json")
const middlewares = jsonserver.defaults()

server.use(middlewares)
server.use(router)
server.listen(8080, () => {
    console.log("json server started")
})