//Visualización del nombre del script 
//alert("Ejmes.js");
//Declaración de variables locales 
var mes;
//Introducir el número  de mes
mes = parseInt(prompt("Número del mes (1 a 6) :")); //prompt permite introducir por teclado
//Visualización del resultado 
switch (mes) {
	case 1:
		document.write("Mes nº" + mes + ": Enero" );
		break;
	case 2:
		document.write("Mes nº" + mes + ": Febrero");
		break;
	case 3:
		document.write("Mes nº" + mes + " : Marzo");
		break;
	case 4:
		document.write("Mes nº" + mes + " : Abril");
		break;
	case 5:
		document.write("Mes nº" + mes + " : Mayo");
		break;
	case 6:
		document.write("Mes nº" + mes + " : Junio");
		break;
	default:
		document.write("Se esperaba un valor entre 1 y 6 para el nº de mes");
	}