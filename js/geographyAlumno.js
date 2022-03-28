// Array de objetos llamados mediante un boton, agrega el array a la hojda de html para visualizar nombre, apellido y notas de los alumnos

document.querySelector('#btnObtenerAlumno').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'geoAlumno.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            // console.log(this.responseText);

            let datos = JSON.parse(this.responseText);
            let carga = document.querySelector('#cargaAlumno');
            carga.innerHTML = ``;
            console.log(datos);
            for(let item of datos){
                // console.log(item.nombre);
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
