export class Celular {
    // Atributos privados
    private marca: string;
    private modelo: string;
    private sistemaOperativo: string;
    private memoriaRAM: number;
    private almacenamientoInterno: number;
    private encendido: boolean;

    // Constructor
    constructor(marca: string, modelo: string, sistemaOperativo: string, memoriaRAM: number = 4, almacenamientoInterno: number = 64, encendido: boolean = false) {
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperativo = sistemaOperativo;
        this.memoriaRAM = memoriaRAM;
        this.almacenamientoInterno = almacenamientoInterno;
        this.encendido = encendido;
    }

    // Getters y Setters
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getSistemaOperativo(): string {
        return this.sistemaOperativo;
    }

    public setSistemaOperativo(sistemaOperativo: string): void {
        this.sistemaOperativo = sistemaOperativo;
    }

    public getMemoriaRAM(): number {
        return this.memoriaRAM;
    }

    public setMemoriaRAM(memoriaRAM: number): void {
        this.memoriaRAM = memoriaRAM;
    }

    public getAlmacenamientoInterno(): number {
        return this.almacenamientoInterno;
    }

    public setAlmacenamientoInterno(almacenamientoInterno: number): void {
        this.almacenamientoInterno = almacenamientoInterno;
    }

    public isEncendido(): boolean {
        return this.encendido;
    }

    // Método para encender/apagar
    public encenderApagar(): void {
        this.encendido = !this.encendido;
    }

    // Método para mostrar información
    public mostrarInfo(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, SO: ${this.sistemaOperativo}, RAM: ${this.memoriaRAM}GB, Almacenamiento: ${this.almacenamientoInterno}GB, Estado: ${this.encendido ? 'Encendido' : 'Apagado'}`;
    }
}
