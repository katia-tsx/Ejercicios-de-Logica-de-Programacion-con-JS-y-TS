/*Una compañía de transporte internacional tiene servicio en algunos países de América del Norte, América Central, 
América del Sur, Europa y Asia. El costo por el servicio de transporte se basa en el peso del paquete y la zona a la
que va dirigido. Lo anterior se muestra en la tabla:

Zona	Ubicación	        Costo/gramo
1	    América del Norte	24.00 euros
2	    América Central	    20.00 euros
3	    América del Sur 	21.00 euros
4	    Europa	            10.00 euros
5	    Asia	            18.00 euros
Parte de su política implica que los paquetes con un peso superior a 5 kg no son transportados, esto por cuestiones
de logística y de seguridad. Realice un algoritmo para determinar el cobro por la entrega de un paquete o, en su caso,
el rechazo de la entrega.*/

function transporte(peso: number, ubicacion: string) {

    switch (ubicacion.toLowerCase()) {
        case "america del norte":
            return peso * 24.00;
        case "america central":
            return peso * 20.00;
        case "america del sur":
            return peso * 21.00;
        case "europa":
            return peso * 10.00;
        case "asia":
            return peso * 18.00;
        default:
            console.log("ubicacion no valida.");
            return 0;
    }
}

const costoEnvio: number = transporte(9, "asia");
if (costoEnvio !== 0) {
    console.log(`El costo total del envio es: ${costoEnvio} euros`);
} else [
    console.log("El paquete no puede ser enviado debido a su ubicacion. (；′⌒`)")
]