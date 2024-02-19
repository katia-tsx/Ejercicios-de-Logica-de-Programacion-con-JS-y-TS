//Algoritmo que pida dos números e indique si el primero es mayor que el segundo o no.
function compararNumeros(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Ambos argumentos deben ser números');
    }

    if (num1 === num2) {
        return `${num1} es igual a ${num2}`;
    } else if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else {
        return `${num2} es mayor que ${num1}`;
    }
}

try {
    const num1 = 9;
    const num2 = 25;
    const resultado = compararNumeros(num1, num2);
    console.log(resultado);
} catch (error) {
    console.error('Error:', error.message);
}
