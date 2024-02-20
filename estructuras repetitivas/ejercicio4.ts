/*Una empresa les paga a sus empleados con base en las horas trabajadas en la semana. Para esto, se registran
los días que trabajó y las horas de cada día. Realice un algoritmo para determinar el sueldo semanal de N trabajadores 
y además calcule cuánto pagó la empresa por los N empleados.*/

function sueldoEmpleados(empleados, dia, Hora, sueldoHora){
    return dia * empleados * sueldoHora * Hora
}

function empleadosSueldosIndi(dia, Hora, sueldoHora){
    return dia * Hora *  sueldoHora
}


const Hora = 8;
const empleados = 12;
const sueldoHora = 1220;
const dia = 6 ;
const individual = empleadosSueldosIndi(dia, Hora, sueldoHora)
const grupal = sueldoEmpleados(empleados, dia, Hora, sueldoHora)

console.log(`El total por empleado en 1 semana es de: ${ individual} pero por todos los empleados son -${grupal} para la empresa por semana`)