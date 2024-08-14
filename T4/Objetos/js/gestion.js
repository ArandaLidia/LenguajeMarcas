/*Crear objeto producto*/
let productos = [
  new Producto("Iphone", 900, "Apple", "telefono", "https://innergo.store/pol_pl_iPhone-15-Plus-512GB-Black-35572_1.webp"),
  new Producto("Camiseta", 345, "Jack&Jones", "ropa", "https://camisetascomohongos.es/3760-large_default/camiseta-valueweight-mujer-personalizada-rosa.jpg"),
  new Producto("Pantalones", 567, "Levis", "ropa", "https://www.armani.com/variants/images/1647597298973575/F/w400.jpg"),
  new Producto("Macbook", 2567, "Apple", "portatil", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKdNMZ8JrtI8NdC-VmVGrlqfjv8MtbFt2ulDkczvXFipbC-01VfHWsxEPdJLch0RBSSE&usqp=CAU"),
  new Producto("Cascos", 278, "Samsung", "musica", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMlOxCcoMpOAyoUeISsIJ0RtxTp2axNYraA&s"),
  new Producto("Disco", 54, "LG", "musica", "https://goldrecordshop.es/wp-content/uploads/2022/03/ejemplo-5.jpg"),
  new Producto("Samsung galaxy", 1500, "Samsung", "telefono", "https://img.pccomponentes.com/articles/34/348303/1616-samsung-galaxy-s21-5g-256gb-rosa-libre-especificaciones.jpg"),
  new Producto("Smart TV", 756, "LG", "television", "https://www.lg.com/content/dam/channel/wcms/es/images/television/32lq63006la_aeu_eees_es_c/gallery/large01.jpg"),
  new Producto("Zapatillas", 132, "Nike", "ropa", "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/56e981d8-dc93-46d6-9f5f-1eaae1b4bafc/dunk-low-zapatillas-2mkzth.png"),
  new Producto("Television 65", 1400, "Samsung", "television", "https://images.samsung.com/is/image/samsung/p6pim/es/qe65q80batxxc/gallery/es-qled-q80b-qe65q80batxxc-531887688?$650_519_PNG$"),
]
let selectCategoria = document.querySelector("#select-categoria")
selectCategoria.addEventListener("change", (e) => {
  //console.log(selectCategoria.value);
  let listafiltrada = productos.filter((item) => { return item.categoria == selectCategoria.value.toLocaleLowerCase() })
  representarResultados(listafiltrada)
})

function representarResultados(lista) {
  seleccionCartas.innerHTML = "";
  lista.forEach((element) => {
    seleccionCartas.innerHTML += `<div class="col animate__animated animate__backInDown">
        <div id="carta1" class="card m-4" style="width: 18rem">
          <img src="${element.imagen}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">
              Marca: ${element.marca} Precio: ${element.precio}
            </p>
            <a href="#" class="btn btn-primary">Ver detalles</a>
          </div>
        </div>
      </div>
      `
  })
}
let seleccionCartas = document.querySelector("#seccion-cartas");

/* productos.forEach((element) => {
  seleccionCartas.innerHTML += `<div class="col">
        <div id="carta1" class="card m-4" style="width: 18rem">
          <img src="${element.imagen}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">
              Marca: ${element.marca} Precio: ${element.precio}
            </p>
            <a href="#" class="btn btn-primary">Más información</a>
          </div>
        </div>S
      </div>
      `
}) */

/*productos.forEach(Element => {
    if (Element.categoria == "ropa") {
        console.log(Element.getNombre)
    }
})*/


/*Lista de los elementos que cumplen la condicion de busqueda */
//productos.find (devuelve el primer elemento que cumple con la condición de busqueda)
/* let busquedaRopa = productos.filter((Element) => {
  return Element.categoria == "ropa"
})

console.log(busquedaRopa) */