/*Diseñar el algoritmo correspondiente a un programa, que:

Crea una tabla bidimensional de longitud 5x15 y nombre ‘marco’.
Carga la tabla con dos únicos valores 0 y 1, donde el valor uno ocupará las posiciones o elementos que delimitan la tabla, 
es decir, las más externas, mientras que el resto de los elementos contendrán el valor 0.

  111111111111111
  100000000000001
  100000000000001
  100000000000001
  111111111111111
Visualiza el contenido de la matriz en pantalla.
*/

const filas: number = 5;
const columnas: number = 15;

const marco: number[][] = [];

function inicializarTabla(): void {
    for (let i = 0; i < filas; i++) {
        marco[i] = [];
        for (let j = 0; j < columnas; j++) {
            if (i === 0 || i === filas - 1 || j === 0 || j === columnas - 1) {
                marco[i][j] = 1;
            } else {
                marco[i][j] = 0;
            }
        }
    }
}

function mostrarTabla(): void {
    for (let i = 0; i < filas; i++) {
        let fila = '';
        for (let j = 0; j < columnas; j++) {
            fila += marco[i][j];
        }
        console.log(fila);
    }
}

function main(): void {
    inicializarTabla();
    mostrarTabla();
}

main();
