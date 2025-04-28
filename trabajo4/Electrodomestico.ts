export class Electrodomestico {
    constructor(
      public marca: string,
      public modelo: string,
      public estaEncendido: boolean = false
    ) {}
  
    encender(): void {
      this.estaEncendido = true;
      console.log(`${this.marca} ${this.modelo} encendida.`);
    }
  
    apagar(): void {
      this.estaEncendido = false;
      console.log(`${this.marca} ${this.modelo} apagada.`);
    }
  
    mostrarInfo(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Estado: ${this.estaEncendido ? "Encendido" : "Apagado"}`);
    }
  }
  