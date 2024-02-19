//Escribir un programa que imprima todos los números pares entre dos números que se le pidan al usuario.

function numerosPares(inicio:number, fin: number){
    const numPares: number[] = [];

    inicio = Math.max(inicio % 2 === 0 ? inicio : inicio + 1,2)
    for (let i = inicio; i <= fin; i += 2){
        numPares.push(i);
    }
    if (numerosPares.length > 0) {
        console.log(`Los números pares entre ${inicio} y ${fin} son: ${numPares.join(', ')}`);
    } else {
        console.log(`No hay números pares entre ${inicio} y ${fin}.`);
    }
}

const primerNumero: number = 2;
const segundoNumero: number = 8;


if (primerNumero <= segundoNumero){
    numerosPares(primerNumero, segundoNumero);
} else {
    console.log("El primer numero debe ser menor o iguak al segundo numero")
}