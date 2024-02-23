/*Crear un vector de 5 elementos de cadenas de caracteres, inicializa el vector con datos leídos por el teclado. 
Copia los elementos del vector en otro vector pero en orden inverso, y muéstralo por la pantalla.*/

type StringVector = string[];

const inputData: string[] = ["hola", "adios", "bien", "mal", "regular"];

function reverseCopy(vector: StringVector): StringVector {
    return vector.slice().reverse();
}

function displayVector(vector: StringVector): void {
    console.log(vector.join(', '));
}

function main() {
    const originalVector = inputData;
    const reversedVector = reverseCopy(originalVector);
    displayVector(originalVector);
    displayVector(reversedVector);
}

main();
