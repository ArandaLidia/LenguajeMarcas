console.log("Ejecutando código JS")


//Gestionar la pulsación del boton.

let boton = document.querySelector("#botonIniciar")

let inputNombre = document.querySelector("#input-nombre")

let parrafoSaludo = document.querySelector("#parrafo-saludo")

let listaSaludo = document.querySelector("#lista-saludo")

let selectopciones = document.querySelector("#select-opciones")
//Con addEventListener  ¡¡¡¡MEJOR ASÍ!!! 
boton.addEventListener("click", () => {

    console.log("Botón pulsado")
    if (inputNombre.value.length > 0) {
        realizarSaludo(inputNombre.value, selectopciones.value);
        guardarSaludo(inputNombre.value)

    } else {
        alert("No ha introducido el nombre")
    }

    inputNombre.value = ""

})


//Con atributo onclick="nombrefuncion()"
/* function pulsacion() {
    console.log("Botón pulsado")
} */



//Funcion (puede ser sin parametros) (JS lenguaje no tipado)
function realizarSaludo(nombre, opcion) {

    parrafoSaludo.textContent = `Hola ${nombre} acabas de realizar un saludo y la opcion ${opcion}.`

}


function guardarSaludo(nombre) {
    //SE USA CUANDO NO HAY ANIMACIONES
    listaSaludo.innerHTML += `<li>${inputNombre.value} ${selectopciones}</li>`

    //ESTE SE USA PARA QUE LAS ANIMACIONES NO SE DUPLIQUEN. 
    /* let nodo = document.createElement("li")
    nodo.textContent = nombre //añado texto al nodo lista.
    nodo.className="nombre-clase" o nodo.classList.add("nombre-clase") //añado la clase al nodo li
    listaSaludo.append(nodo) //añado el nodo a la lista. */
}