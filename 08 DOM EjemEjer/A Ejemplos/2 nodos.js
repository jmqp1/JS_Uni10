'use strict';

console.log('****** Elementos dentro del BODY ******');
let bodyNodes = document.body.children;
//console.log(bodyNodes);
for (let i=0 ; i < bodyNodes.length ; i++) {
    console.log("* Nodo " + (i+1) + " *")
    console.log("Nombre: " + bodyNodes[i].nodeName + " ," + // H4, P, P, SCRIPT
        " Tipo: " + bodyNodes[i].nodeType + " ," +  //Todos devuelven tipo 1 (Element)
        " Valor: " + bodyNodes[i].nodeValue);       //Todos devuelven tipo Null
}

console.log('****** Elementos con ID p1 y su hermano ******');
let p1 = document.getElementById('p1');
console.log('p#' + p1.id + ' -> ' + p1.textContent);

let p2 = p1.nextElementSibling; //Siguiente elemento desde p1
console.log('p#' + p2.id + ' -> ' + p2.textContent);

console.log('****** Elementos con la clase "par" ******');
let pars = document.getElementsByClassName('par');
for (let i=0 ; i<pars.length ; i++) {
    console.log('p#' + pars[i].id + ' ->' + pars[i].textContent);
}