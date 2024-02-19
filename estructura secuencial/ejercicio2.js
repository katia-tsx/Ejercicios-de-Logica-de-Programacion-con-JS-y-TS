//Calcular el perímetro y área de un rectángulo dada su base y su altura.

function calcularPerimetro(base, altura){
    return 2 * (base + altura)
};

function calcularArea(base, altura){
    return base * altura
};

let base = 5;
let altura = 3

const perimetro = calcularPerimetro(base, altura);
const area = calcularArea(base, altura)

console.log("el perimetro es igual: " + perimetro);
console.log("el area va a ser igual: " + area)