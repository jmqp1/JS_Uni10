'use strict';

let buttonAlert = document.getElementById("showAlert");
buttonAlert.addEventListener("click", () => {
    alert("Hola, soy un mensaje de alerta.");
    console.log("Se cerró la alerta");
});

let buttonConfirm = document.getElementById("showConfirm");
buttonConfirm.addEventListener("click", () => {
    let response = confirm("Quieres más dinero?");
    if (response) {
        console.log("Busca un trabajo mejor");
    } else {
        console.log("Estás seguro? Vale...");
    }
});

let buttonPrompt = document.getElementById("showPrompt");
buttonPrompt.addEventListener("click", () => {
    let response = prompt("Cómo te llamas?","Elvis");
    if (response) {
        console.log("Tu nombre es " + response);
    } else {
        console.log("Dime tu nombre!!");
    }
});