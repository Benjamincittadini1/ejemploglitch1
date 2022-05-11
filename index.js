const fs = require('fs')

class Container{
    constructor(filename){
        this.filename = filename;
    
}
async readFile(){
    try {
        let productos = await fs.promises.readFile(this.filename,'utf-8');
        productos = JSON.parse(productos);
        return productos;

    } catch (error) {
        console.error(error);
    }
}

async writeFile(json) {
	await fs.writeFile(this.filePath, JSON.stringify(json))
}

async save(dato){
    try {
        await fs.promises.appendFile(this.filename, dato)
        console.log("Guardado correctamente")
    } catch (error) {
        console.log(error)
    }
}
async deletAll(){
    try {
        await fs.promises.writeFile(this.filename,"[]")
        console.log("contenido borrado")
    } catch (error) {
        throw new Error(error)
    }
}
async getAll(){
    try {
        let contenido = await fs.promises.readFile(this.filename, "utf-8")
        return JSON.parse(contenido)
    } catch (error) {
        throw new Error(error)
    }
}
async getById(id){
    try {
        const contenido = await this.getAll()
        const contenidoParse = JSON.parse(contenido)
        const filtro = contenidoParse.filter(identificador=> identificador.id===id)
        console.log(filtro)
    } catch (error) {
        throw new Error(error)
    }
}
async deleteById(id){
    try {
        let productos = await this.readFile();

        let productsFiltered = productos.filter(item=> item.id!==id)

        productsFiltered = JSON.stringify(productsFiltered);
        await fs.promises.writeFile(this.filename , productsFiltered);
        console.log(JSON.parse(productsFiltered))
    } catch (error) {
        console.error(error);
    }
}
}






module.exports = Container