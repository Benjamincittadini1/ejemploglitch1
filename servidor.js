const fs = require("fs")
const express = require("express")
const { json } = require("express/lib/response")
const Container = require("./index")
const container = new Container("./productos.txt")
const app = express()


app.get("/", (req, res) =>{
    res.send(`<h1>HOLA BUENAS NOCHES</h1>`)
})


app.get("/productos", async (req, res) =>{
    res.send(await container.getAll())
})

app.get("/productoRandom", async (req, res) =>{
    let products = await container.getAll()
    let productParse = JSON.parse(products)
    let numAl = Math.floor(Math.random() * productParse.length)
    res.send(productParse[numAl])
})

const PORT = 8080 

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))
