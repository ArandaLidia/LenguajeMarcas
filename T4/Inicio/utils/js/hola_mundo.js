console.log("Codigo ejecutado desde el fichero js externo");
console.log("Segunda línea del fichero js externo");

// Para modificar el texto de una web hay que saber cuál es el nodo que quieres modificar
let parrafo = document.querySelector("p");
parrafo.textContent = "Cambiando el contenido del parrafo mediante JS";

let parrafoDos = document.querySelector("#parrafo-dos");
parrafoDos.textContent = "Este cambio va a verse en el párrafo 2.";

let parrafoTres = document.querySelector(".parrafos");
parrafoTres.textContent = "Este cambio se muestra en el párrafo 3.";

let parrafos = document.querySelectorAll("p");

parrafos.forEach((item, index) => {
    item.textContent = "Cargando párrafo " + (index + 1);
});

parrafos.forEach((item, index) => {
    item.textContent = `Cargando párrafo... ${(index + 1)}`;
});

let inputOperando1 = document.querySelector("#input-op1");
let inputOperando2 = document.querySelector("#input-op2");
let botonOperar = document.querySelector("#boton-operar");

let resultado = document.querySelector(".resultado");

let contador = document.querySelector("span");
let textoInput = document.querySelector("#texto-input");

textoInput.addEventListener("keyup", (e) => {
    if (e.target.value.length <= 100) {
        contador.textContent = e.target.value.length;
    } else {
        e.preventDefault();
    }
});

let input2Operando1 = document.querySelector("#input2-op1");
let input2Operando2 = document.querySelector("#input2-op2");
let boton2Operar = document.querySelector("#boton2-operar");

let resultado2 = document.querySelector(".resultado2");

let selectOperacion = document.querySelector("#select-operacion");

boton2Operar.addEventListener("click", (e) => {
    if (input2Operando1.value.length > 0 && input2Operando2.value.length > 0) {
        let operacion = selectOperacion.value;
        let resultadoOperacion;
        switch (Number(operacion)) {
            case 1:
                resultadoOperacion = Number(input2Operando1.value) + Number(input2Operando2.value);
                break;
            case 2:
                resultadoOperacion = Number(input2Operando1.value) - Number(input2Operando2.value);
                break;
            case 3:
                resultadoOperacion = Number(input2Operando1.value) * Number(input2Operando2.value);
                break;
            case 4:
                resultadoOperacion = Number(input2Operando1.value) / Number(input2Operando2.value);
                break;
            default:
                break;
        }
        resultado2.textContent = resultadoOperacion;
    } else {
        alert("No hay datos para operar");
    }

    let contador = document.querySelector("span")
    let textoInput = document.querySelector("#texto-input")

    textoInput.addEventListener("keyup", (e) => {
        if (e.target.value.length <= 100) {
            contador.textContent = e.target.value.length
        } else {
            e.preventDefault
        }
    })
});
