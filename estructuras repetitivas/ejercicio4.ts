/*Una empresa les paga a sus empleados con base en las horas trabajadas en la semana. Para esto, se registran
los días que trabajó y las horas de cada día. Realice un algoritmo para determinar el sueldo semanal de N trabajadores 
y además calcule cuánto pagó la empresa por los N empleados.*/

function sueldoEmpleados(){
    return dia * empleados * sueldoHora * Hora
}

function empleadosSueldosIndi(){
    return dia * Hora *  sueldoHora
}


const Hora = 8;
const empleados = 12;
const sueldoHora = 1220;
const dia = 6 ;


console.log(`El total por empleado en 1 semana es de: ${ empleadosSueldosIndi} pero por todos los empleados son -${empleados * Hora * dia * sueldoHora} para la empresa`)