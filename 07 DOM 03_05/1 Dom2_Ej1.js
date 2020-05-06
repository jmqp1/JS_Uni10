console.log(document.querySelector("#div1 a").title); // Imprime "hola mundo"; el primer título que encuentra
console.log(document.querySelector("#div1 a"));      //Devuelve el primer elemento <a> que encuentra

//console.log(document.querySelector("#div1 >a").title);
// ERROR: No hay un hijo inmediato dentro de <div id="div1"> el cual sea un enlace <a>
console.log(document.querySelector("#div1 > p > a").title); // Imprime "hola mundo". Este sí funciona.

var titulos= document.querySelectorAll("#div1 [title]"); //Almacena un array completo sobre la variable titulos
console.log(titulos);   // Devuelve todo el array
console.log(titulos[2]);// Devuelve el elemento con titulo "hola de nuevo". El tercer elemento del array almacenado

console.log(document.querySelector(".normalLink[title^='adios']").title); 
// Imprime "adios mundo", busca con el atributo "title" el primer valor que empiece por adios
console.log(document.querySelector(".normalLink[title^='adios'] + a").title); 
// Imprime "hola de nuevo", busca con el atributo "title" el valor siguiente al que coincide

console.log('**ELEMENTOS CON CLASE normalLink**');
let elems = document.querySelectorAll(".normalLink");
//almacena en la variable elems todos los elementos del documento con clase normalLink
elems.forEach(function(elem) { // Imprime "hola mundo" y "adios mundo"
    console.log(elem.title);
});

console.log('**ELEMENTOS CON title QUE COMIENZA POR "hola"**');
let elems2 = document.querySelectorAll("a[title^='hola']"); // Atributo title EMPIEZA por “hola...”
//Almacena en elems2 todos los elementos cuyo atributo title empiece por 'hola'
elems2.forEach(function(elem) { // Imprime "hola mundo" y "hola de nuevo"
    console.log(elem.title);
});

console.log('**ELEMENTOS HERMANOS DEL QUE TIENE COMO ATRIBUTO title "hola mundo"**');
let elems3 = document.querySelectorAll("a[title='hola mundo'] ~ a"); // Hermanos de <a title="hola mundo">, PERO NO ÉL
elems3.forEach(function(elem) { // Imprime "adios mundo" y "hola de nuevo"
    console.log(elem.title);
});
