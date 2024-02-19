//Escribir un programa que convierta un valor dado en grados Fahrenheit a grados Celsius. Recordar que la fórmula para la conversión es: C = (F-32)*5/9
function fahrenheitACelsius(gradosFahrenheit) {
    const gradosCelsius = (gradosFahrenheit - 32) * 5 / 9;
    return gradosCelsius;
}

const gradosFahrenheit = 68; 
const gradosCelsius = fahrenheitACelsius(gradosFahrenheit);
console.log(`${gradosFahrenheit} grados Fahrenheit son equivalentes a ${gradosCelsius.toFixed(2)} grados Celsius.`);
