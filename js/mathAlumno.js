// Array de objetos llamados mediante un boton, agrega el array a la hojda de html para visualizar nombre, apellido y notas de los alumnos

document.querySelector('#btnObtenerMatAlumno').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'mathAlumno.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let datos = JSON.parse(this.responseText);
            let carga = document.querySelector('#cargaMatAlumno');
            carga.innerHTML = ``;
            for(let item of datos){
                carga.innerHTML += `
                <tr>
                    <td>${item.nombre}</td>
                </tr>
                <tr>
                    <td>${item.apellido}</td>
                </tr>
                <tr>
                    <td>${item.nota1}</td>
                </tr>
                <tr>
                    <td>${item.nota2}</td>
                </tr>
                <tr>
                    <td>${item.nota3}</td>
                </tr>
                `
            }
        }
    }
}