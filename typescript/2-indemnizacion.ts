class CalcularIndemnizacion {
    private sueldoBase: number = 0;
    private añosTrabajados: number = 0;
    private salarioPendiente: number = 0;
    private deudas: number = 0;
    private mesesTrabajados: number = 0;
    private bono: number = 0;
    private aguinaldo: number = 0;
    private indemnizacion: number = 0;

    public asignarSueldoBase(sueldoBase: number) {
        this.sueldoBase = sueldoBase;
    }

    public asignarATrabajados(añosTrabajados: number) {
        this.añosTrabajados = añosTrabajados;
    }

    public asignarSalarioPendiente(salarioPendiente: number) {
        this.salarioPendiente = salarioPendiente;
    }

    public asignarDeudas(deudas: number) {
        this.deudas = deudas;
    }

    public asignarMesesTrabajados(mesesTrabajados: number) {
        this.mesesTrabajados = mesesTrabajados;
    }

    // BONO 14
    public calcularBono(): string {
        this.bono = (this.sueldoBase / 12) * this.mesesTrabajados;
        return `Bono 14: ${this.bono.toFixed(2)}`;
    }

    // AGUINALDO
    public calcularAguinaldo(): string {
        this.aguinaldo = (this.sueldoBase / 12) * this.mesesTrabajados;
        return `Aguinaldo: ${this.aguinaldo.toFixed(2)}`;
    }

    // INDEMNIZACION
    public calcularIndemnizacion(): string {
        this.indemnizacion =
            this.sueldoBase * this.añosTrabajados +
            this.bono +
            this.aguinaldo +
            this.salarioPendiente -
            this.deudas;
        return `Indemnización Total: ${this.indemnizacion.toFixed(2)}`;
    }
}

const calcularIndemnizacion = new CalcularIndemnizacion();

function obtenerTotal() {
    calcularIndemnizacion.asignarSueldoBase(
        parseFloat((document.getElementById('sueldoBase') as HTMLInputElement).value) || 0
    );
    calcularIndemnizacion.asignarATrabajados(
        parseFloat((document.getElementById('añosTrabajados') as HTMLInputElement).value) || 0
    );
    calcularIndemnizacion.asignarSalarioPendiente(
        parseFloat((document.getElementById('salarioPendiente') as HTMLInputElement).value) || 0
    );
    calcularIndemnizacion.asignarDeudas(
        parseFloat((document.getElementById('deudas') as HTMLInputElement).value) || 0
    );
    calcularIndemnizacion.asignarMesesTrabajados(
        parseFloat((document.getElementById('mesesTrabajados') as HTMLInputElement).value) || 0
    );
}

document.getElementById('calcularButton')!.addEventListener('click', () => {
    obtenerTotal();
    let resultadoDiv = document.getElementById('respuesta')!;
    resultadoDiv.innerHTML = ""; // Limpiar el contenido anterior

    let resultado = "";

    resultado += `${calcularIndemnizacion.calcularBono()}<br>`;
    resultado += `${calcularIndemnizacion.calcularAguinaldo()}<br>`;
    resultado += `${calcularIndemnizacion.calcularIndemnizacion()}`;

    resultadoDiv.innerHTML = resultado;
});
