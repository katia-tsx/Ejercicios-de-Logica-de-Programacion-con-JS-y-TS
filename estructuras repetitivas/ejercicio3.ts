/*Una empresa tiene el registro de las horas que trabaja diariamente un empleado durante la semana (seis días) y 
requiere determinar el total de éstas, así como el sueldo que recibirá por las horas trabajadas.*/

function HorasTrabajo(Dias, hora, sueldoPorHora) {
    return sueldoPorHora * hora * Dias;
}

const Dias = 6;
const hora = 8;
const sueldoPorHora = 50;
const empleado = "Maria";

const PagoHorasTrabajadas = HorasTrabajo(Dias, hora, sueldoPorHora);

console.log(`${empleado} trabajó ${hora} horas cada día de la semana y su sueldo por hora es de ${sueldoPorHora}, por lo que su pago por esta semana es de ${PagoHorasTrabajadas}`);
