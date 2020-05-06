let link1 = document.getElementById("toGoogle1");   //Captura del elemento con ID toGoogle1 en la vable link1
let link2 = document.getElementById("toGoogle2");   //Captura del elemento con ID toGoogle2 en la vable link2

link1.className = "enlaceNEW";    // Equivale a: link.setAttribute("class", "enlace");
link1.setAttribute("href", "https://twitter.com");
link1.textContent = "Twitter";      //Modificar el texto
if(!link1.hasAttribute("title")) {  // Si no tenía el atributo title, establecemos uno 
    link1.title = "Ahora voy a Twitter!";
}

let ValorAt=link1.getAttribute("title")

// Imprime: <a id="toGoogle" href="https://twitter.com" class="enlace“ title="Ahora voy a Twitter!">Twitter</a> 
console.log(ValorAt);
console.log(link1);
console.log(link2);

let div = document.getElementById("normalDiv");
console.log(div);
div.style.boxSizing = "border-box";
div.style.maxWidth = "200px";
div.style.padding = "50px";
div.style.color = "white";
div.style.backgroundColor = "cyan";



