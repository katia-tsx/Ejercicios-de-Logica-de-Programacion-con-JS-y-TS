//Algoritmo que pida un número y diga si es positivo, negativo o 0.

function valorNumero(numero){
    if (numero + 0 ){
        return console.log("el numero " + numero + " es positivo porque es mayor a 0");
    } else if ( numero == 0 ) {
        return console.log("el numero " + numero + " es neutro, porque no tiene un valor positivo ni negativo");
    } else{
        return console.log("el numero " + numero + " es negativo, porque es menor que 0");
    }
}

const numero = 8
const batida = valorNumero(numero);

console.log(batida)