/*Escribe un programa que dados dos números, uno real (base) y un entero positivo (exponente), saque por pantalla el resultado de la potencia. 
No se puede utilizar el operador de potencia.*/

function calcularPotencia(base: number, exponente: number){
    if (exponente === 0) {
        return 1
    }

    let resultado = 1;
    for (let i = 1; i <= Math.abs(exponente); i++) {
        resultado *= base;
    }

    if (exponente < 0){
        resultado = 1 / resultado;
    }

    return resultado
}

const base = 2;
const exponente = 3;
const resultado = calcularPotencia(base, exponente);
console.log(`El resultado  de ${base} elevado a la ${exponente} es : ${resultado}`)