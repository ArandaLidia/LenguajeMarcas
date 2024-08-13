/*Crear objeto producto*/
let productos = [
    new Producto("Iphone", 900, "Apple", "telefono"),
    new Producto("Camiseta", 345, "Jack&Jones", "ropa"),
    new Producto("Pantalones", 567, "Levis", "ropa"),
    new Producto("Macbook", 2567, "Apple", "portatil"),
    new Producto("Cascos", 278, "Samsung", "musica"),
    new Producto("Disco", 54, "LG", "musica"),
    new Producto("Samsung galaxy", 1500, "Samsung", "telefono"),
    new Producto("Smart TV", 756, "LG", "television"),
    new Producto("Zapatillas", 132, "Nike", "ropa"),
    new Producto("Television 65", 1400, "Samsung", "television"),
]

/*productos.forEach(Element => {
    if (Element.categoria == "ropa") {
        console.log(Element.getNombre)
    }
})*/


/*Lista de los elementos que cumplen la condicion de busqueda */
let busquedaRopa = productos.filter((Element) => {
    return Element.categoria == "ropa"
})

console.log(busquedaRopa)