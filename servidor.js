const express = require('express')
const { json } = require('express/lib/response')
const productos = require("./productos")

let prodParseado = JSON.stringify(productos)
const app = express()

app.get("/", (req, res) =>{
    res.send(`<h1>HOLA BUENAS NOCHES</h1>`)
})


app.get("/productos", (req, res) =>{
    res.send(prodParseado)
})

app.get("/productoRandom", (req, res) =>{
    const fs= require("fs")
    let tempFile = JSON.parse(fs.readFileSync(this.filename, "utf-8"))
    productos.getById(Math.round(MAth.random() * ((tempFile.length) - 0 + 1)))
   
})

const PORT = 8080 

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))
