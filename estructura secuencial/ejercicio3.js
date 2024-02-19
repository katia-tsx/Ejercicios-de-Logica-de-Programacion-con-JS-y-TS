    //dados los catetos de un triángulo rectángulo, calcular su hipotenusa.
function calcularHipotenusa(cateto1, cateto2) {
    const hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
    return hipotenusa;
}

const cateto1 = 3;
const cateto2 = 4;
const hipotenusa = calcularHipotenusa(cateto1, cateto2);
console.log("La hipotenusa es:", hipotenusa);