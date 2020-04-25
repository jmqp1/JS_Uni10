//Array
let tabla=[10,20,30,'leon',true,"Fin"];
console.log("Mi tabla es: "+ tabla);
console.log("El primer elemento es: "+ tabla[0]);
let tamaño=tabla.length;
console.log("El tamaño de la tabla es " +tamaño);

console.log("Recorrer un Array");
for (let i=0;i<tamaño;i++) {    //(inicio;condición;incremento)
    console.log("Elemento Nº " + i + " es "+ tabla[i]);
}

// Tres formas de recorrer un Array creado
let fecha=new Array(23,5,"Hola",new Date());

//1: Típica, iterando elementos de un array
for(let i=0;i<fecha.length;i++) {
    console.log("Tabla fecha: = "+fecha[i]);
}

//2: Sin usar el índice
for(let Index in fecha){
    console.log("Tabla fecha con Indice: = "+fecha[Index]); // Parecido a forEach
}

//3: Sin usar el índice, forEach y flechas
fecha.forEach((item)=>console.log("Tabla fecha con Flechas:= " + item));