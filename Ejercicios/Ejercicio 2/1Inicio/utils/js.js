// Se declaran las variables que representan los campos del formulario que vamos a necesitar
let inputNombre = document.querySelector("input#input-nombre"); // Input para el nombre
let inputApellido = document.querySelector("input#input-apellido"); // Input para el apellido
let inputmail = document.querySelector("#input-email")
let selectDepartamento = document.querySelector("#select-departamento"); // Select para el departamento
let boton = document.querySelector("#boton-agregar"); // Botón para agregar trabajador

// Seleccionamos el elemento donde se mostrará la lista de trabajadores
let listaTrabajadores = document.querySelector("#lista-trabajadores");

// Declaramos un array vacío para almacenar los datos de los trabajadores
let listaTrabajadoresDatos = [];

// Inicializamos los contadores de cada departamento y el total de trabajadores a 0
let it = 0;
let ventas = 0;
let administracion = 0;
let marketing = 0;
let total = 0;

// Seleccionamos los elementos del DOM donde se mostrará el conteo de trabajadores por departamento y total
let contadorIt = document.querySelector("#contadorIt");
let contadorMarketing = document.querySelector("#contadorMarketing");
let contadorVentas = document.querySelector("#contadorVentas");
let contadorAdministracion = document.querySelector("#contadorAdministracion");
let contadorTotal = document.querySelector("#contadorTotal"); // Corregido el id

// Añadimos un event listener al botón que se activa al hacer clic
boton.addEventListener("click", () => {
    // Verificamos que los campos nombre, apellido y departamento no estén vacíos
    if (inputNombre.value.length > 0 && inputApellido.value.length > 0 && selectDepartamento.value.length > 0) {

        // Si todos los campos tienen valor, agregamos un string al array listaTrabajadoresDatos.
        // El formato será: "Nombre Apellido - Área: Departamento"
        listaTrabajadoresDatos.push(`${inputNombre.value} ${inputApellido.value} - Área: ${selectDepartamento.value}`);

        // Creamos un nuevo elemento HTML <li> para mostrar en la lista de trabajadores
        let nodo = document.createElement("li");

        // Asignamos el texto al nodo <li> con el formato adecuado
        nodo.textContent = `${inputNombre.value} ${inputApellido.value} - Área: ${selectDepartamento.value}`;

        // Incrementamos el contador correspondiente según el departamento seleccionado
        if (selectDepartamento.value == "it") {
            it++; // Incrementar el contador de IT
            total++; // Incrementar el total
        } else if (selectDepartamento.value == "ventas") {
            ventas++; // Incrementar el contador de Ventas
            total++; // Incrementar el total
        } else if (selectDepartamento.value == "administracion") {
            administracion++; // Incrementar el contador de Administración
            total++; // Incrementar el total
        } else if (selectDepartamento.value == "marketing") {
            marketing++; // Incrementar el contador de Marketing
            total++; // Incrementar el total
        }

        // Actualizamos el contenido de los elementos en la tabla que muestran los contadores
        contadorIt.textContent = it;
        contadorMarketing.textContent = marketing;
        contadorVentas.textContent = ventas;
        contadorAdministracion.textContent = administracion;
        contadorTotal.textContent = total;

        // Asignamos una clase CSS al nuevo elemento <li> para darle estilo
        nodo.className = "list-group-item mt-2";

        // Agregamos el nuevo nodo <li> a la lista de trabajadores
        listaTrabajadores.appendChild(nodo);

        // Limpiamos los campos del formulario después de agregar el trabajador
        inputNombre.value = "";
        inputApellido.value = "";
        inputmail.value = "";
        selectDepartamento.value = ""; // Reiniciamos el select a su valor por defecto

        // Mostrar alerta con SweetAlert
        Swal.fire({
            title: '¡Hola!',
            text: 'Has agregado un trabajador correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    } else {
        // Mensaje de error si falta información
        Swal.fire({
            title: 'Error!',
            text: 'Por favor, completa todos los campos requeridos.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }
});
