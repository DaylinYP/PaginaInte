var SalarioLiquido = /** @class */ (function () {
    function SalarioLiquido() {
        this.salario = 0;
        this.bonificacion = 0;
        this.comisiones = 0;
        this.resultadoa = 0;
        this.ahorro = 0;
        this.igss = 0;
        this.prestamos = 0;
        this.resultadob = 0;
        this.resultadoc = 0;
        this.resultadod = 0;
    }
    SalarioLiquido.prototype.asignarSalario = function (salario) {
        this.salario = salario;
    };
    SalarioLiquido.prototype.asignarBonificacion = function (bonificacion) {
        this.bonificacion = bonificacion;
    };
    SalarioLiquido.prototype.asignarComisiones = function (comisiones) {
        this.comisiones = comisiones;
    };
    SalarioLiquido.prototype.asignarAhorro = function (ahorro) {
        this.ahorro = ahorro;
    };
    SalarioLiquido.prototype.asignarIgss = function (igss) {
        this.igss = igss;
    };
    SalarioLiquido.prototype.asignarPrestamos = function (prestamos) {
        this.prestamos = prestamos;
    };
    //TOTAL GANADO
    SalarioLiquido.prototype.sumar = function () {
        this.resultadoa = this.salario + this.bonificacion + this.comisiones;
        return "Total Ganado:  " + this.resultadoa.toFixed(2);
    };
    //CUOTA DEL IGSS
    SalarioLiquido.prototype.multiplicar = function () {
        this.resultadob = this.salario * 0.0483;
        return ", Cuota IGSS:  " + this.resultadob.toFixed(2);
    };
    //TOTAL DE DESCUENTOS
    SalarioLiquido.prototype.descuentos = function () {
        this.resultadoc = this.ahorro + this.resultadob + this.prestamos;
        return ", Total de Descuentos:  " + this.resultadoc.toFixed(2);
    };
    //SUELDO LIQUIDO
    SalarioLiquido.prototype.sueldoLiquido = function () {
        this.resultadod = this.resultadoa - this.resultadoc;
        return "Sueldo Líquido:  " + this.resultadod.toFixed(2);
    };
    return SalarioLiquido;
}());
var salarioLiquido = new SalarioLiquido();
function obtenerTotal() {
    salarioLiquido.asignarSalario(parseFloat(document.getElementById('salario').value) || 0);
    salarioLiquido.asignarBonificacion(parseFloat(document.getElementById('bonificacion').value) || 0);
    salarioLiquido.asignarComisiones(parseFloat(document.getElementById('comisiones').value) || 0);
    salarioLiquido.asignarAhorro(parseFloat(document.getElementById('ahorro').value) || 0);
    salarioLiquido.asignarPrestamos(parseFloat(document.getElementById('prestamos').value) || 0);
}
//TOTAL GANADO
function sumar() {
    obtenerTotal();
    var totalGanado = document.getElementById('totalGanado');
    var resultadoDiv = document.getElementById('resultado');
    totalGanado.value = salarioLiquido.sumar();
    resultadoDiv.textContent = salarioLiquido.sumar();
}
//CUOTA IGSS
function multiplicar() {
    obtenerTotal();
    var igss = document.getElementById('igss');
    igss.value = salarioLiquido.multiplicar();
}
//DESCUENTOS
function descuentos() {
    obtenerTotal();
    var descuentos = document.getElementById('descuentos');
    descuentos.value = salarioLiquido.descuentos();
}
//SUELDOLIQUIDO
function calcularSueldoLiquido() {
    sumar();
    multiplicar();
    descuentos();
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent += "\n" + salarioLiquido.sueldoLiquido() + "\n" + salarioLiquido.multiplicar() +
        "\n" + salarioLiquido.descuentos() + "\n" + salarioLiquido.sumar();
}
document.getElementById('botonSueldo').addEventListener('click', calcularSueldoLiquido);
