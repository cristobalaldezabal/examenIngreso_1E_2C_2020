/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;

	let contmujeres = 0; 
	let acumuladoredad = 0;
	let promedio;
	let maxpeso;
	let flag = 0;
	let nombremaxpeso;

	for (let i = 0; i < 5; i++) 
	{


	nombre = prompt("ingrese nombre");
	peso = parseInt(prompt("ingrese peso"));


	do {
			sexo = prompt("ingreso sexo: f/m");

			if (sexo == "f") {
				contmujeres++;
			}
			else {
				if (flag == 0 || maxpeso < peso) {
					maxpeso = peso;
					nombremaxpeso = nom;
					flag = 1;
				}
			}

		} while (sexo != "f" && sexo != "m");

		edad = parseInt(prompt("ingrese edad"));
		acumuladoredad = acumuladoredad + edad;
		promedio = acumuladoredad / 5;


	}


	document.write("la cantidad de mujeres es de" + contmujeres);
	document.write("el promedio total de la edad es" + promedio);
	document.write("el hombre que mas pesa es " + nombremaxpeso + "y su peso es de " + maxpeso);


}
