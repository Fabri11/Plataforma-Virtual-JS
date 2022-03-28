// Roles:

// 1.-Profesor
// 2.-Alumno

function obtenerListaUsuarios() {
    let listaUsuarios = localStorage.getItem("NewUsers");
    if (!listaUsuarios) {
        listaUsuarios = [{
                name: "Fabrizio",
                lastname: "Sabella",
                email: "profesor@gmail.com",
                password: "profesor",
                rol: "1"
            },
            {
                name: "María",
                lastname: "Montero",
                email: "alumno@gmail.com",
                password: "alumno",
                rol: "2"
            }
        ];
        localStorage.setItem("NewUsers", JSON.stringify(listaUsuarios));
        return listaUsuarios;
    } else {
        return JSON.parse(listaUsuarios);
    }


}

// funcion para validar creedenciales de los usuarios registrados como profesor o alumno
function validarCredenciales(pCorreo, pContraseña) {
    let listaUsuarios = obtenerListaUsuarios();
    let bAcesso = false;
    for (var i = 0; i < listaUsuarios.length; i++) {
        if (pCorreo == listaUsuarios[i].email && pContraseña == listaUsuarios[i].password) {
            bAcesso = true;
            localStorage.setItem('usuarioActivo', listaUsuarios[i].name + ' ' + listaUsuarios[i].lastname);
            localStorage.setItem('rolUsuarioActivo', listaUsuarios[i].rol);
        }
    }
    return bAcesso;
}