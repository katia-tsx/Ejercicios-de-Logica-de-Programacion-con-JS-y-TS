/*
Se quiere realizar un programa que lea por teclado las 5 notas obtenidas por un alumno (comprendidas entre 0 y 10). 
A continuación debe mostrar todas las notas, la nota media, la nota más alta que ha sacado y la menor.
*/

type Nota = number;

function obtenerNotaAleatoria(): Nota {
    return Math.floor(Math.random() * 11); 
}

function calcularEstadisticasDeNotas(notas: Nota[]): [Nota[], Nota, Nota, Nota] {
    const maxima = Math.max(...notas);
    const minima = Math.min(...notas);
    const media = notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
    return [notas, media, maxima, minima];
}

function devolver() {
    const notas: Nota[] = [];
    
    for (let i = 0; i < 5; i++) {
        notas.push(obtenerNotaAleatoria());
    }

    console.log("Notas obtenidas:");
    notas.forEach((nota, indice) => {
        console.log(`Nota ${indice + 1}: ${nota}`);
    });

    const [todasLasNotas, media, notaMaxima, notaMinima] = calcularEstadisticasDeNotas(notas);
    console.log(`Nota media: ${media}`);
    console.log(`Nota más alta: ${notaMaxima}`);
    console.log(`Nota más baja: ${notaMinima}`);
}

devolver();

