/*let clima = prompt("hola como esta el dia de hoy?");

alert(`el dia de hoy esta ${clima}`);*/
//----------------------------------------------------------------------------
/*let radio = prompt("ingrese el radio :");
let area = Math.PI * (radio **2);
let perimetro = 2 * Math.PI * radio;

alert(`el area de la circunsferencia es ${area} y el perimetro es ${perimetro}`);*/
//-----------------------------------------------------------------------------
/*let edad = prompt("que edad tienes ? :");
if(edad >= 18){
    alert("eres mayor de edad");
}else{
    alert("eres menor de edad");
}*/
//----------------------------------------------------------------------------------
/*let caracter = prompt("ingresa S o N");
if(caracter == "S" || caracter == "N"){
    alert("CORRECTO");
}else{
    alert("INCORRECTO");
}*/
//-----------------------------------------------------------------------
/*let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let operacion = prompt(`que operacion deseas realizar
S o s para la suma
R o r para la resta
M o m para la multiplicacion
D o d para la divicion `);
let resultado = null;

switch(operacion.toLocaleUpperCase()){
    case "S" || "s":
        resultado = numero1 + numero2;
        break;
    case "R" || "r":
        resultado = numero1 - numero2;
        break;
    case "M" || "m":
        resultado = numero1 * numero2;
        break;
    case "D" || "d":
        resultado = numero1 / numero2;
        break;
    default :
        alert("no existe la operacion");  
}
alert(resultado);*/
//----------------------------------------------------------

/*let numero = parseInt(prompt("ingrese un numero entero"));

if(numero % 2 == 0 && numero != 0){
    alert("el numero es par");
    
}if(numero == 0){
    alert("el numero no es par ni inpar");
}else if(numero % 2 == 1){
    alert("el numero es impar");
}*/
//--------------------------------------------------------------

/*var numeroLimite = parseInt(prompt("ingrese un numero limite"));
let aux = 0;
do {
    let numero = parseInt(prompt("ingrese un numero"));

    aux = aux + numero;
} while (numeroLimite > aux);*/

//----------------------------------------------------------------

let numerosEnteros = null;
let sumaDeNumeros = [];

while (numerosEnteros !== 0) {
    numerosEnteros = parseInt(prompt("ingrese numeros enteros , si quiere finalizar presione 0 :"));
    if(numerosEnteros == 0){
        continue;
    }
   sumaDeNumeros.push(numerosEnteros);
   
}

function compare( a, b){
    if(a < b){
        return -1;
    }if(a > b){
        return 0;
    }if( a == b){
        return 1;
    }
}



let aux = 0;

for (const e of sumaDeNumeros) {
    aux = aux + e ;
}
let promedio = aux / sumaDeNumeros.length;
let ordenados = sumaDeNumeros.sort(compare);
let minimo = ordenados[0];
let maximo = ordenados[ordenados.length -1];

document.write(`<b>los numeros son :</b>${ordenados}</br>
<b>el promedio de todos los numeros son :</b>${promedio}</br>
<b>el minimo de todos los numeros es :</b>${minimo}</br>
<b>el maximo de todos los numeros es :</b>${maximo}`);







