/*Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, a continuación lo inicialice con valores 
aleatorios (del 1 al 10) y posteriormente muestre en pantalla cada elemento del vector junto con su cuadrado y su cubo.*/

const vector_numeros: number[] = [];

for (let i = 0; i < 10; i++) {
    vector_numeros[i] = Math.floor(Math.random() * 10) + 1;
}

function calcularCuadradoCubo(numero: number): [number, number] {
    const cuadrado = numero ** 2;
    const cubo = numero ** 3;
    return [cuadrado, cubo];
}

console.log("Elemento\tCuadrado\tCubo");
for (let i = 0; i < vector_numeros.length; i++) {
    const numero = vector_numeros[i];
    const [cuadrado, cubo] = calcularCuadradoCubo(numero);
    console.log(`${numero}\t\t${cuadrado}\t\t${cubo}`);
}
