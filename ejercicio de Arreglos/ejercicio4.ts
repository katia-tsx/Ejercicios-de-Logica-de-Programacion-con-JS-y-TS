/*Programa que declare un vector de diez elementos enteros y pida números para rellenarlo hasta que se llene el vector o se 
introduzca un número negativo. Entonces se debe imprimir el vector (sólo los elementos introducidos).*/

const tamañoVector: number = 10;

const numerosInput: number[] = [5, 8, 3, -1, 2, 7, 4];

function main() {
    const vector: number[] = [];

    for (let i = 0; i < tamañoVector && i < numerosInput.length; i++) {
        const numero = numerosInput[i];
        if (numero < 0) {
            break; 
        }
        vector.push(numero);
    }
    console.log("Vector:");
    console.log(vector);
}

main();
