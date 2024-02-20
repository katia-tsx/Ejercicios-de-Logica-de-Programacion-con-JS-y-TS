//Dados dos números, mostrar la suma, resta, división y multiplicación de ambos.
function realizarOperaciones(num1, num2) {    
    return {
        suma: num1 + num2,
        resta: num1 - num2,
        division: num1 / num2,
        multiplicacion: num1 * num2
    };
}

const numero1 = 10;
const numero2 = 5;
const operaciones = realizarOperaciones(numero1, numero2);
console.log("Suma:", operaciones.suma);
console.log("Resta:", operaciones.resta);
console.log("División:", operaciones.division);
console.log("Multiplicación:", operaciones.multiplicacion);