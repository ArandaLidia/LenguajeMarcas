let inputNombre = document.querySelector("input#input-nombre")
let inputApellido = document.querySelector("input#input-apellido")

let boton = document.querySelector("#boton-agregar")
let listaUsuarios = document.querySelector("#lista-usuarios")

let listaUsuariosDatos = []
let botonBuscar = document.querySelector("#boton-buscar")
let listaBuscar = document.querySelector("#lista-busqueda")
let inputBuscar = document.querySelector("input#input-buscar")
boton.addEventListener("click", () => {
    if (inputNombre.value.length > 0 && inputApellido.value.length > 0) {
        //listaUsuarios.innerHTML += `<li class='list-group-item mt-2 animate__animated animate__zoomInUp'>${inputNombre.value} ${inputApellido.value}</li>`
        listaUsuariosDatos.push(`${inputNombre.value} ${inputApellido.value}`)
        let nodo = document.createElement("li")
        nodo.textContent = `${inputNombre.value} ${inputApellido.value}`
        nodo.className = "list-group-item mt-2 animate__animated animate__zoomInUp"

        nodo.addEventListener("click", () => {
            nodo.classList.remove("animate__animated", "animate__zoomInUp", "animate__bounce");
            void nodo.offsetWidth; // Reinicia el reflujo para reiniciar la animación
            nodo.classList.add("animate__animated", "animate__bounce");

        })

        listaUsuarios.append(nodo)

        inputNombre.value = ""
        inputApellido.value = ""

        Swal.fire({
            title: 'Correcto',
            text: 'Usuario agregado correctamente',
            icon: "success",
            confirmButtonText: "Aceptar",
        })
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Error: Faltan datos',
            icon: "error",
            timer: 1500,
        })
    }

})

botonBuscar.addEventListener("click", () => {
    listaBuscar.innerHTML = ""
    let listaBusqueda = listaUsuariosDatos.filter((item) => {
        return item.toLowerCase().includes(inputBuscar.value.toLowerCase());
    })
    listaBusqueda.forEach((item) => {
        listaBuscar.innerHTML += `<li class='list-group-item mt-2 animate__animated animate__zoomInUp'>${item}</li>`
    })
})