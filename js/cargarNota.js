// Admin Profesor

// Cargar notas


// Crear una funcion con respectivas variables para capturar nombre y edad
function capturar() {
    // console.log("capturado")
    function Persona(nombre,edad,apellido){
        this.nombre=nombre;
        this.edad=edad;
        this.apellido=apellido;
    }
    let nombreCapturar = document.getElementById("nombre").value;

    let apellidoCaputar = document.getElementById("apellido").value;

    let edadCapturar = document.getElementById("edad").value;

    // Creamos un objeto para el ingreso de las personas, asi poder ingresar sus datos sin ser estáticos
    nuevoSujeto = new Persona(nombreCapturar,edadCapturar, apellidoCaputar);
    console.log(nuevoSujeto);
    agregar();
}

// creamos una base de datos para almacenar los datos del "nuevoSujeto" y asi agregar sus datos al HTML directamente
let baseDatos= [];
function agregar (){
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML+=`<tr><div class="row"><td>${nuevoSujeto.nombre}</td></div></tr><tr><div class="row"><td>${nuevoSujeto.apellido}</td></div></tr><tr><div class="row"><td>${nuevoSujeto.edad}</td></div></tr>`
}

