/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
 
let marca;
let precio;
let peso;
let tipo;
let liquidocaro;
let marcaliquidomaximo;
let solidominimo;
let marcasolidominimo;
let acumuladorpeso = 0;
let flag = 0;
let resp = "s";


  do {

    marca=prompt("ingrese una marca");
    precio=parseInt(prompt("ingrese un precio"));
    peso=parseInt(prompt("ingrese un precio en kg"));
    acumuladorpeso = acumuladorpeso + peso;

    do {
     
  tipo = prompt("ingrese tipo solido o liquido");

      switch (tipo) {
        case "liquido":
          if (flag == 0 || liquidocaro < precio) 
          {
            liquidocaro = precio;
            marcaliquidomaximo = marca;
            flag = 1;
          }
          break;
        case "solido":
          if(flag == 0 || solidominimo > precio)
          {
            solidominimo = precio;
            marcasolidominimo = marca;
            flag = 1;
          }
      }


    } while (tipo != "liquido" && tipo != "solido");


    resp = prompt("desea ingresar otro producto? s/n");
  } while (resp == "s");

 alert("el peso total de la compra es" +acumuladorpeso); 
 alert("la marca del liquido mas caro es " +marcaliquidomaximo);
 alert("la marca del solido mas barato es" + marcasolidominimo);

}
