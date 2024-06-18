let sueldoBase;
let añosTrabajados;
let salarioPendiente;
let deudas;
let mesesTrabajados;

function mostrarDatos() {

    sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
    añosTrabajados = parseInt(document.getElementById("añosTrabajados").value);
    salarioPendiente = parseFloat(document.getElementById("salarioPendiente").value);
    deudas = parseFloat(document.getElementById("deudas").value);
    mesesTrabajados = parseInt(document.getElementById("mesesTrabajados").value);

    //BONO 14
    let bono = sueldoBase / 12 * mesesTrabajados;

    //AGUINALDO
    let aguinaldo = (sueldoBase / 12 * mesesTrabajados);

    //INDEMNIZACION
    let indemnizacion = 
    (sueldoBase * añosTrabajados) + bono + aguinaldo + salarioPendiente - deudas

    document.getElementById("respuesta").innerHTML =
        "Bono 14: Q" + bono.toFixed(2) + "<br> Aguinaldo: Q" + aguinaldo.toFixed(2)
        + "<br>Indemnización: Q" +indemnizacion.toFixed(2);
}



