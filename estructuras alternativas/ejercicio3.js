//Escribe un programa que lea un número e indique si es par o impar.
function parImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " es par"
    }
    return numero + " es impar"
}

const numero = -7
const esPar = parImpar(numero)
console.log(esPar)