//Escribir un programa que imprima todos los números pares entre dos números que se le pidan al usuario.

function numerosPares(inicio: number, fin: number) {
    const numPares: number[] = [];
    if (primerNumero === segundoNumero) {
        "El primer numero debe ser menor o mayor al segundo numero";
    }

    inicio = Math.max(inicio % 2 === 0 ? inicio : inicio + 1, 2)
    for (let i = inicio; i <= fin; i += 2) {
        numPares.push(i);
    }
    if (numerosPares.length > 0) {
        return `Los números pares entre ${inicio} y ${fin} son: ${numPares.join(', ')}`;
    }
    return `No hay números pares entre ${inicio} y ${fin}.`;
}
6
const primerNumero: number = 2;
const segundoNumero: number = 8;

const paresNumeros = numerosPares(primerNumero, segundoNumero);;
console.log(paresNumeros);