type Pago = {
    horasTrabajadas: number;
    sueldoPorHora: number;
    diasTrabajados: number;
}

function calcularSueldoIndividual(pago: Pago): number {
    return pago.horasTrabajadas * pago.sueldoPorHora * pago.diasTrabajados;
}

function calcularSueldoTotal(empleados: Pago[]): number {
    let sueldoTotal = 0;
    for (const empleado of empleados) {
        sueldoTotal += calcularSueldoIndividual(empleado);
    }
    return sueldoTotal;
}

const horasTrabajadas = 8;
const sueldoPorHora = 1220;
const diasTrabajados = 6;

const empleados: Pago[] = [
    { horasTrabajadas, sueldoPorHora, diasTrabajados },
    { horasTrabajadas: 7, sueldoPorHora: 1300, diasTrabajados: 5 } 
];

const sueldoTotal = calcularSueldoTotal(empleados);

console.log(`El total por empleado en 1 semana es de: ${calcularSueldoIndividual(empleados[0])}, pero por todos los empleados son ${sueldoTotal} para la empresa por semana.`);
