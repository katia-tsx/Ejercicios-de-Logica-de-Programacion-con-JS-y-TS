/*Crear un programa que lea los precios de 5 artículos y las cantidades vendidas por una empresa en sus 4 sucursales. Informar:

Las cantidades totales de cada articulo.
La cantidad de artículos en la sucursal 2.
La cantidad del articulo 3 en la sucursal 1.
La recaudación total de cada sucursal.
La recaudación total de la empresa.
La sucursal de mayor recaudación.*/
const precios: number[] = [];
const cantidades: number[][] = [
    [10, 20, 30, 40, 50], // Sucursal 1
    [15, 25, 35, 45, 55], // Sucursal 2
    [20, 30, 40, 50, 60], // Sucursal 3
    [25, 35, 45, 55, 65]  // Sucursal 4
];

function obtenerCantidadesTotales(cantidades: number[][]): number[] {
    const cantidadesTotales: number[] = new Array(cantidades[0].length).fill(0);
    
    for (let i = 0; i < cantidades.length; i++) {
        for (let j = 0; j < cantidades[i].length; j++) {
            cantidadesTotales[j] += cantidades[i][j];
        }
    }
    
    return cantidadesTotales;
}

function obtenerCantidadArticulosSucursal(cantidades: number[][], sucursal: number): number {
    return cantidades[sucursal - 1].reduce((total, cantidad) => total + cantidad, 0);
}

function obtenerRecaudacionSucursal(precios: number[], cantidades: number[]): number {
    return precios.reduce((total, precio, index) => total + precio * cantidades[index], 0);
}

function obtenerRecaudacionTotal(precios: number[], cantidades: number[][]): number {
    return cantidades.reduce((total, cantidadesSucursal) => {
        return total + obtenerRecaudacionSucursal(precios, cantidadesSucursal);
    }, 0);
}

function obtenerSucursalMayorRecaudacion(precios: number[], cantidades: number[][]): number {
    let mayorRecaudacion = 0;
    let sucursalMayorRecaudacion = 0;
    
    for (let i = 0; i < cantidades.length; i++) {
        const recaudacion = obtenerRecaudacionSucursal(precios, cantidades[i]);
        if (recaudacion > mayorRecaudacion) {
            mayorRecaudacion = recaudacion;
            sucursalMayorRecaudacion = i + 1;
        }
    }
    
    return sucursalMayorRecaudacion;
}

function calcularResultados() {
    const cantidadesTotales = obtenerCantidadesTotales(cantidades);
    console.log("Cantidades totales de cada artículo:", cantidadesTotales);

    const cantidadSucursal2 = obtenerCantidadArticulosSucursal(cantidades, 2);
    console.log("Cantidad de artículos en la sucursal 2:", cantidadSucursal2);

    const cantidadArticulo3Sucursal1 = cantidades[0][2];
    console.log("Cantidad del artículo 3 en la sucursal 1:", cantidadArticulo3Sucursal1);

    console.log("Recaudación total de cada sucursal:");
    for (let i = 0; i < cantidades.length; i++) {
        const recaudacion = obtenerRecaudacionSucursal(precios, cantidades[i]);
        console.log(`Sucursal ${i + 1}: ${recaudacion}`);
    }

    const recaudacionTotalEmpresa = obtenerRecaudacionTotal(precios, cantidades);
    console.log("Recaudación total de la empresa:", recaudacionTotalEmpresa);

    const sucursalMayorRecaudacion = obtenerSucursalMayorRecaudacion(precios, cantidades);
    console.log("Sucursal de mayor recaudación:", sucursalMayorRecaudacion);
}

calcularResultados();
