/*De una empresa de transporte se quiere guardar el nombre de los conductores que tiene, y los kilómetros que conducen cada 
día de la semana.

Para guardar esta información se van a utilizar dos arreglos:

Nombre: Vector para guardar los nombres de los conductores.
kms: Tabla para guardar los kilómetros que realizan cada día de la semana.
Se quiere generar un nuevo vector (“total_kms”) con los kilómetros totales que realza cada conductor.

Al finalizar se muestra la lista con los nombres de conductores y los kilómetros que ha realizado.*/

const nombres: string[] = ["Juan", "Pedro", "María"];
const kms: number[][] = [
    [50, 60, 70, 80, 90],   // Kilómetros conducidos por Juan cada día de la semana
    [45, 55, 65, 75, 85],   // Kilómetros conducidos por Pedro cada día de la semana
    [40, 50, 60, 70, 80]    // Kilómetros conducidos por María cada día de la semana
];

function calcularKilometrosTotales(kms: number[][]): number[] {
    const totalKms: number[] = [];

    for (let i = 0; i < kms.length; i++) {
        const conductorKms = kms[i];
        const totalConductor = conductorKms.reduce((acumulador, kmsDia) => acumulador + kmsDia, 0);
        totalKms.push(totalConductor);
    }

    return totalKms;
}

function conductores() {
    const total_kms = calcularKilometrosTotales(kms);
    console.log("Lista de conductores y sus kilómetros realizados:");
    for (let i = 0; i < nombres.length; i++) {
        console.log(`${nombres[i]}: ${total_kms[i]} km`);
    }
}

conductores();
