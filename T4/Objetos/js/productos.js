//Crear un objeto

//Crear clase
class Producto {

    //Atributos
    nombre;
    precio;
    marca;
    categoria;

    //Constructor
    constructor(nombre, precio, marca, categoria) {
        this.marca = marca
        this.categoria = categoria
        this.nombre = nombre
        this.precio = precio
    }

    //Metodos
    mostrarDatos() {
        console.log(`Marca: ${this.marca}`)
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Categoria: ${this.categoria}`)
        console.log(`Precio: ${this.precio}`)
    }
    //Getter y Setter
    get getNombre() {
        return this.nombre
    }
    set setNombre(nombre) {
        return this.nombre = nombre;
    }
}