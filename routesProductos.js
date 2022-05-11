const { Router } = require("express")
const router = Router()
const productos = require("./productos")


const verificarPrecio = function (req,res,next){
    if( isNaN(req.body.price)){
        return res.json({mensaje:"El valor asignado a precio es incorrecto"})
    }
    next()
}


router.get("/", (req,res)=>{
    res.json({productos:productos})
})

router.post("/", verificarPrecio, (req,res)=>{
    const newProduct = req.body
    productos.push(newProduct)
    for (var i = 0; i < productos.length; i++){
        productos[i].id = + i;}
        res.redirect("/")
    })
    
    
router.get("/api/productos/:id",(req,res)=>{
    let {id} = req.params
    const listaFiltro = productos
    let item = listaFiltro.filter(identificador=> identificador.id===id)
    res.json(item)
})

router.delete("/api/productos/:id",(req,res)=>{
    let {id} = req.params
    const listaProd = productos
    let productoEliminado = listaProd.splice(Number(id),1)
    res.json(productoEliminado)
})

module.exports = router