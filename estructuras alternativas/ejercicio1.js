//Algoritmo que pida dos números e indique si el primero es mayor que el segundo o no.
function numeroMayorMenor(num1, num2) {
    if (num1 > num2) {
        return num1 + " es mayor que " + num2;
    } else if (num1 === num2) {
        return num1 + " es igual a " + num2;
    } else {
        return num2 + " es mayor que " + num1;
    }
}

const num1 = 25;
const num2 = 25;
const resultado = numeroMayorMenor(num1, num2);
console.log(resultado);
