/*La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se 
clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de 
un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por la uva que entrega en un 
embarque, considerando lo siguiente: si es de tipo A, se le cargan 20 céntimos al precio inicial cuando es 
de tamaño 1; y 30 céntimos si es de tamaño 2. Si es de tipo B, se rebajan 30 céntimos cuando es de tamaño 1, 
y 50 céntimos cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida.*/

function calcularPrecioFinal(tipo: string, tamaño: number, precioInicial: number): number {
    if (tipo === 'A') {
        if (tamaño === 1) {
            return precioInicial + 0.20;
        }
        if (tamaño === 2) {
            return precioInicial + 0.30;
        }
    }

    if (tipo === 'B') {
        if (tamaño === 1) {
            return precioInicial - 0.30;
        }
        if (tamaño === 2) {
            return precioInicial - 0.50;
        }
    }

    throw new Error('Tipo o tamaño de uva no válido');
}

const tipoUva = 'A';
const tamañoUva = 2;
const precioInicialUva = 10; 

try {
    const precioFinal = calcularPrecioFinal(tipoUva, tamañoUva, precioInicialUva);
    console.log(`El precio final por kilo de uva es: ${precioFinal.toFixed(2)} euros`);
} catch (error) {
    console.error('Error:', error.message);
}
