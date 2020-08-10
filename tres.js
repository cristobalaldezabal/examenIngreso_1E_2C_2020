/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let destino;
	let temporada;
	let cant;
	let contbariloche;
	let contcataratas;
	let contsalta;
	let maximodes ="";
	let flag = 0;
	let promedio;
	let acumuladorpersonas = 0;  
	let contviaje = 0;


let cantidadmaxima;
let sexomaximo;

contbariloche=0;
contcataratas=0;
contsalta=0;
	let resp = "si";


do {
	do {

	sexo = prompt("ingrese sexo del titular masculino/femenino");
} while (sexo != "masculino" && sexo != "femenino");

do {
destino = prompt("ingrese destino de su estadia: bariloche/cataratas/salta");

			switch (destino) {
				
				case "cataratas":
				contcataratas++;
				break;
				case "salta":
				contsalta++;
				break;
                case "bariloche":
				contbariloche++;
				break;
			}

		} while (destino != "salta" && destino != "cataratas" && destino != "bariloche");

		do {
			temporada = prompt("ingrese la temporada en la que desea viajar: otoño/invierno/verano/primavera");

			if(temporada == "invierno"){
				acumuladorpersonas = acumuladorpersonas + cant;
				contviaje++;
				promedio = acumuladorpersonas/contviaje;
			}


		}while (temporada != "invierno" && temporada != "otoño" && temporada != "primavera" && temporada != "verano");

		cant = parseInt(prompt("ingrese la cantidad de personas que viajan"));
		if (flag == 0 || cantidadmaxima < cant) {
			cantidadmaxima = cant;
			sexomaximo = sexo;
		}


		resp = prompt("quiere ingresar otra estadia? si/no");
	} while (resp == "si");

	

	if (contcataratas > contsalta && contcataratas > contbariloche) {
		maximodes = "cataratas";
	}
	else if (contsalta > contcataratas && contsalta > contbariloche) {
		maximodes = "salta";
	}
	else {
		maximodes = "bariloche";
	}


if(acumuladorpersonas !=0 && contviaje != 0){
		alert("el promedio de personas por viaje de invierno es de" + promedio);
	}	
	
alert("el destino mas elegido es: " + maximodes);
alert("el sexo del titular que lleva mas pasajeros es: " + sexomaximo);
}
