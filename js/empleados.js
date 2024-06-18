let nombre;
let ingreso;
let puesto;
let salario;


function mostrarDatos() {

    nombre = document.getElementById("nombreIngresado").value;
    ingreso = document.getElementById("inp1").value;
    puesto = document.getElementById("inp2").value;
    salario = parseFloat(document.getElementById("inp3").value);


    // Crear filas nuevas conforme ingresan los datos
    let tbody = document.getElementById("tbody");
    let otraF = tbody.insertRow();

    //Va insertando la información
    let celdaNombre = otraF.insertCell(0);
    let celdaIngreso = otraF.insertCell(1);
    let celdaPuesto = otraF.insertCell(2);
    let celdaSalario = otraF.insertCell(3);

    celdaNombre.textContent = nombre;
    celdaIngreso.textContent = ingreso;
    celdaPuesto.textContent = puesto;
    celdaSalario.textContent = salario;
}

function eliminarUltima(){
    event.preventDefault();
    document.getElementById("tabla").deleteRow(-1);
}

