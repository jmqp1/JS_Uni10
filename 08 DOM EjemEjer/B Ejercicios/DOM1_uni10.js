'use strict';

let forms = document.getElementsByTagName("form");
console.log(forms);

document.write("<br>Número de formularios del documento: " + forms.length);
document.write("<br>Nombre del primero formulario: " + forms[0].name);
document.write("<br>Idenfificador del segundo formulario: " + forms[1].id);