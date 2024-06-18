let salario;
let bonificacion;
let comisiones;

let ahorro;
let igss;
let prestamos;

function mostrarSueldo() {

    salario = parseFloat(document.getElementById("salario").value);
    bonificacion = parseFloat(document.getElementById("bonificacion").value);
    comisiones = parseFloat(document.getElementById("comisiones").value);
    ahorro = parseFloat(document.getElementById("ahorro").value);
    igss = parseFloat(document.getElementById("igss").value);
    prestamos = parseFloat(document.getElementById("prestamos").value);

    //TOTAL GANADO
    let totalGanado = salario + bonificacion + comisiones
    document.getElementById("totalGanado").value =
        totalGanado;


    //CUOTA DEL IGSS    
    let cuotaIgss = salario * 4.83 / 100
    document.getElementById("igss").value =
        cuotaIgss;


    //TOTAL DE DESCUENTOS
    let descuentosT = ahorro + cuotaIgss + prestamos
    document.getElementById("descuentos").value =
        descuentosT;

    //SUELDO LIQUIDO
    let sueldoLiquido = totalGanado - descuentosT

    document.getElementById("resultado").innerHTML =

        "Total Ganado: Q " + totalGanado + "<br>Cuota del IGSS: Q " + cuotaIgss +
        "<br>Descuentos totales: Q " + descuentosT + "<br>Sueldo Liquido: Q" + sueldoLiquido;
}


