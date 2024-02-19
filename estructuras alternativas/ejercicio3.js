//Escribe un programa que lea un número e indique si es par o impar.
function parImpar(numero){
    if ( numero % 2 === 0 ){
        console.log( numero + " es par")
    } else {
        console.log(numero + " es impar")
    }
}

const numero = -7
const esPar = parImpar(numero) 
console.log(esPar)