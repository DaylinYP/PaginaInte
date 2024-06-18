var CalcularIndemnizacion = /** @class */ (function () {
    function CalcularIndemnizacion() {
        this.sueldoBase = 0;
        this.añosTrabajados = 0;
        this.salarioPendiente = 0;
        this.deudas = 0;
        this.mesesTrabajados = 0;
        this.bono = 0;
        this.aguinaldo = 0;
        this.indemnizacion = 0;
    }
    CalcularIndemnizacion.prototype.asignarSueldoBase = function (sueldoBase) {
        this.sueldoBase = sueldoBase;
    };
    CalcularIndemnizacion.prototype.asignarATrabajados = function (añosTrabajados) {
        this.añosTrabajados = añosTrabajados;
    };
    CalcularIndemnizacion.prototype.asignarSalarioPendiente = function (salarioPendiente) {
        this.salarioPendiente = salarioPendiente;
    };
    CalcularIndemnizacion.prototype.asignarDeudas = function (deudas) {
        this.deudas = deudas;
    };
    CalcularIndemnizacion.prototype.asignarMesesTrabajados = function (mesesTrabajados) {
        this.mesesTrabajados = mesesTrabajados;
    };
    // BONO 14
    CalcularIndemnizacion.prototype.calcularBono = function () {
        this.bono = (this.sueldoBase / 12) * this.mesesTrabajados;
        return "Bono 14: ".concat(this.bono.toFixed(2));
    };
    // AGUINALDO
    CalcularIndemnizacion.prototype.calcularAguinaldo = function () {
        this.aguinaldo = (this.sueldoBase / 12) * this.mesesTrabajados;
        return "Aguinaldo: ".concat(this.aguinaldo.toFixed(2));
    };
    // INDEMNIZACION
    CalcularIndemnizacion.prototype.calcularIndemnizacion = function () {
        this.indemnizacion =
            this.sueldoBase * this.añosTrabajados +
                this.bono +
                this.aguinaldo +
                this.salarioPendiente -
                this.deudas;
        return "Indemnizaci\u00F3n Total: ".concat(this.indemnizacion.toFixed(2));
    };
    return CalcularIndemnizacion;
}());
var calcularIndemnizacion = new CalcularIndemnizacion();
function obtenerTotal() {
    calcularIndemnizacion.asignarSueldoBase(parseFloat(document.getElementById('sueldoBase').value) || 0);
    calcularIndemnizacion.asignarATrabajados(parseFloat(document.getElementById('añosTrabajados').value) || 0);
    calcularIndemnizacion.asignarSalarioPendiente(parseFloat(document.getElementById('salarioPendiente').value) || 0);
    calcularIndemnizacion.asignarDeudas(parseFloat(document.getElementById('deudas').value) || 0);
    calcularIndemnizacion.asignarMesesTrabajados(parseFloat(document.getElementById('mesesTrabajados').value) || 0);
}
document.getElementById('calcularButton').addEventListener('click', function () {
    obtenerTotal();
    var resultadoDiv = document.getElementById('respuesta');
    resultadoDiv.innerHTML = ""; // Limpiar el contenido anterior
    var resultado = "";
    resultado += "".concat(calcularIndemnizacion.calcularBono(), "<br>");
    resultado += "".concat(calcularIndemnizacion.calcularAguinaldo(), "<br>");
    resultado += "".concat(calcularIndemnizacion.calcularIndemnizacion());
    resultadoDiv.innerHTML = resultado;
});
