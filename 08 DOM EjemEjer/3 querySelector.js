'use strict';

console.log("----- Una forma de recorrer la primera lista -----");
let ul1 = document.getElementById("firstListElement").parentElement;
console.log(ul1.children);
for (let i=0 ; i<ul1.children.length ; i++) {
    console.log(ul1.children[i].textContent);
}

console.log("----- Elementos '.item1' en la primera lista ------");
let ul1item1 = document.getElementsByClassName("ul1")[0];
let items1 = ul1item1.getElementsByClassName("item1"); //Elementos .item1 dentro de .ul1b
console.log(items1);
for(let i=0; i<items1.length ; i++) {
    console.log(items1[i].textContent);
}

console.log("----- Igual que antes pero con querySelectorAll ------");
let itemsSel = document.querySelectorAll("ul.ul1 > li.item1"); //Elementos <li class="item1"> que son hijos directos de elementos <ul class="ul1">
console.log (itemsSel);
for(let i=0 ; i<itemsSel.length ; i++) {
    console.log(itemsSel[i].textContent);
}
console.log("----- Elementos de lista .ul2 que no tengan clase .item1 ------");
itemsSel = document.querySelectorAll("ul.ul2 > li:not(.item1)"); //Elementos <li class!="item1"> hijos directos de <ul class="ul2">
console.log(itemsSel);
for(let i = 0; i < itemsSel.length; i++) {
    console.log(itemsSel[i].textContent);
}


console.log("---- <input> cuyo atributo VALUE empiece por 'input' -----");
let inputs = document.querySelectorAll("input[value^='input']");
inputs.forEach(function(input) {
    console.log(input);
});
