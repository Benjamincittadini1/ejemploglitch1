const fs = require("fs")
const express = require("express")
const app = express()
const morgan = require ("morgan")
const routesProducts = require("./routesProductos")


app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(express.static(__dirname+"/public"))
app.use("/api/productos", routesProducts)
app.use("/api/productos/:id", routesProducts)




const PORT = 8080 

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))
