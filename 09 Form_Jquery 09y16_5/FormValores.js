let form = null;

document.addEventListener('DOMContentLoaded', e => {
    form = document.getElementById('formulario');
    form.addEventListener('submit', envioForm);
});

function envioForm(e) {
    e.preventDefault();
    const aficiones = Array.from(form.aficiones)
        .filter (function (a){  //sin arrow
            return a.checked
            console.log(a.checked)
        })
        /*.filter(input => input.checked) // con arrow
            input.checked
          })*/
        .map(input => input.value);
    
    document.getElementById('envio').textContent = `Nombre: ${form.nombre.value},
    Aficiones: ${aficiones}, Color: ${form.color.value}`;

    if(formulario.fichero.files.length) { // Si hemos seleccionado un archivo
        const fichero = formulario.fichero.files[0];
        document.getElementById('envioArchivo').textContent = `Archivo: ${fichero.name},
        tipo: ${fichero.type}, tamaño: ${fichero.size}bytes`;

        if(fichero.type.startsWith('image')) {  //busca un string tipo "image" 
            cargaImagen(fichero);
        }
    }
}

function cargaImagen(fichero) {
    let reader = new FileReader();
    reader.readAsDataURL(fichero); // muestra la URL de la imagen

    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result; //Visualiza la imagen
    });
}
