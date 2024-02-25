/*
Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor.
*/

type Nota = number;

function obtenerNota(indice: number): Nota {
    return Math.floor(Math.random() * 10) + 1;
}

function calcularMedia(notas: Nota[]): number {
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
}

function obtenerNotaMaxima(notas: Nota[]): Nota {
    return Math.max(...notas);
}

function obtenerNotaMinima(notas: Nota[]): Nota {
    return Math.min(...notas);
}

function main() {
    const notas: Nota[] = [];

    for (let i = 0; i < 5; i++) {
        notas.push(obtenerNota(i + 1));
    }

    console.log("Notas obtenidas:");
    notas.forEach((nota, indice) => {
        console.log(`Nota ${indice + 1}: ${nota}`);
    });

    const media = calcularMedia(notas);
    console.log(`Nota media: ${media}`);

    const notaMaxima = obtenerNotaMaxima(notas);
    console.log(`Nota más alta: ${notaMaxima}`);

    const notaMinima = obtenerNotaMinima(notas);
    console.log(`Nota más baja: ${notaMinima}`);
}

main();
