class SalarioLiquido {
    private salario: number = 0;
    private bonificacion: number = 0;
    private comisiones: number = 0;
    private resultadoa: number = 0;
    private ahorro: number = 0;
    private igss: number = 0;
    private prestamos: number = 0;
    private resultadob: number = 0;
    private resultadoc: number = 0;
    private resultadod: number = 0;

    public asignarSalario(salario: number) {
        this.salario = salario;
    }

    public asignarBonificacion(bonificacion: number) {
        this.bonificacion = bonificacion;
    }

    public asignarComisiones(comisiones: number) {
        this.comisiones = comisiones;
    }
    
    public asignarAhorro(ahorro: number) {
        this.ahorro = ahorro;
    }
    
    public asignarIgss(igss: number) {
        this.igss = igss;
    }
    
    public asignarPrestamos(prestamos: number) {
        this.prestamos = prestamos;
    }
    
    //TOTAL GANADO
    public sumar(): string {
        this.resultadoa = this.salario + this.bonificacion + this.comisiones;
        return "Total Ganado:  " +this.resultadoa.toFixed(2);
    }
    
    //CUOTA DEL IGSS
    public multiplicar(): string {
        this.resultadob = this.salario * 0.0483;
        return ", Cuota IGSS:  " + this.resultadob.toFixed(2);
    }
    
    //TOTAL DE DESCUENTOS
    public descuentos(): string{
        this.resultadoc = this.ahorro + this.resultadob + this.prestamos;
        return ", Total de Descuentos:  "  + this.resultadoc.toFixed(2);
    }
    
    //SUELDO LIQUIDO
    public sueldoLiquido(): string{
        this.resultadod = this.resultadoa - this.resultadoc;
        return "Sueldo Líquido:  "  + this.resultadod.toFixed(2);
    }
}

const salarioLiquido = new SalarioLiquido();

function obtenerTotal() {
    salarioLiquido.asignarSalario(
        parseFloat((document.getElementById('salario') as HTMLInputElement).value) || 0
    );
    salarioLiquido.asignarBonificacion(
        parseFloat((document.getElementById('bonificacion') as HTMLInputElement).value) || 0
    );
    salarioLiquido.asignarComisiones(
        parseFloat((document.getElementById('comisiones') as HTMLInputElement).value) || 0
    );
    salarioLiquido.asignarAhorro(
        parseFloat((document.getElementById('ahorro') as HTMLInputElement).value) || 0
    );
    salarioLiquido.asignarPrestamos(
        parseFloat((document.getElementById('prestamos') as HTMLInputElement).value) || 0
    );
}
//TOTAL GANADO
function sumar() {
    obtenerTotal();
    let totalGanado = document.getElementById('totalGanado') as HTMLInputElement;
    let resultadoDiv = document.getElementById('resultado') as HTMLElement;
    totalGanado.value = salarioLiquido.sumar();
    resultadoDiv.textContent = salarioLiquido.sumar();
}
//CUOTA IGSS
function multiplicar(){
    obtenerTotal();
    let igss = document.getElementById('igss') as HTMLInputElement;
    igss.value = salarioLiquido.multiplicar();
}
//DESCUENTOS
function descuentos(){
    obtenerTotal();
    let descuentos = document.getElementById('descuentos') as HTMLInputElement;
    descuentos.value = salarioLiquido.descuentos();
}
//SUELDOLIQUIDO
function calcularSueldoLiquido() {
    sumar();
    multiplicar();
    descuentos();
    let resultadoDiv = document.getElementById('resultado') as HTMLElement;
    resultadoDiv.textContent += "\n" + salarioLiquido.sueldoLiquido() + "\n" + salarioLiquido.multiplicar() + 
    "\n" + salarioLiquido.descuentos() + "\n" + salarioLiquido.sumar();
}

document.getElementById('botonSueldo')!.addEventListener('click', calcularSueldoLiquido);
