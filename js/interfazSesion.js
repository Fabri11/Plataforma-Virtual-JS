// evento para el boton de ingresar y cuando hagas click llamar a la funcion para captuar el correo y contraseña
document.querySelector('#btnIngresar').addEventListener("click", iniciarSesion);

function iniciarSesion() {
    let sCorreo = '';
    let sContraseña = '';
    let bAcesso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContraseña = document.querySelector('#txtContraseña').value;

    // Validacion de credenciales para el acceso del alumno o profesor segun el usuario entrante
    // console.log(sCorreo);
    // console.log(sContraseña);
    bAcesso = validarCredenciales(sCorreo, sContraseña);

    if (bAcesso == true) {
        ingresar();
    }
}


// funcion para permitir despues de acceder con un usuario definido (profesor o alumno) ir a la respectiva pestaña de cada uno
function ingresar() {
    let rol = localStorage.getItem('rolUsuarioActivo');
    switch (rol) {
        case "1":
            window.location.href = 'pages/admin.html';
            break;
        case "2":
            window.location.href = 'pages/plataformaAlumnos/plataforma.html';
            break;
        default:
            window.location.href = 'pages/admin.html';
            break;
    }
}



// Admin Profesor

// Cargar notas

// Crear una funcion con respectivas variables para capturar nombre y edad
function capturar() {
    // console.log("capturado")
    function Persona(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    let nombreCapturar = document.getElementById("nombreAlumno").value;
    // console.log(nombreCapturar);
    let notaCapturar = document.getElementById("notaAlumno").value;
    // console.log(edadCapturar);

    // Creamos un objeto para el ingreso de las personas, asi poder ingresar sus datos sin ser estáticos
    nuevoSujeto = new Persona(nombreCapturar, notaCapturar);
    console.log(nuevoSujeto);
    agregar();
}

// creamos una base de datos para almacenar los datos del "nuevoSujeto" y asi agregar sus datos al HTML directamente
let baseDatos = [];

function agregar() {
    baseDatos.push(nuevoSujeto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += `<tr><td> ${nuevoSujeto.nombre}</td><td>${nuevoSujeto.nota}</td></tr>`
}
