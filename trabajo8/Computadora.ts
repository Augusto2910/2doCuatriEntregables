import { ComputadoraBuilder } from "./ComputadoraBuilder";

export class Computadora {
  public procesador?: string;
  public ram?: string;
  public almacenamiento?: string;
  public tarjetaGrafica?: string;
  public sistemaOperativo?: string;

  constructor(builder: ComputadoraBuilder) {
    this.procesador = builder.getProcesador();
    this.ram = builder.getRAM();
    this.almacenamiento = builder.getAlmacenamiento();
    this.tarjetaGrafica = builder.getTarjetaGrafica();
    this.sistemaOperativo = builder.getSistemaOperativo();
  }

  public mostrarConfiguracion(): void {
    console.log("Configuración de la computadora:");
    console.log(`Procesador: ${this.procesador ?? "No especificado"}`);
    console.log(`RAM: ${this.ram ?? "No especificado"}`);
    console.log(`Almacenamiento: ${this.almacenamiento ?? "No especificado"}`);
    console.log(`Tarjeta Gráfica: ${this.tarjetaGrafica ?? "No especificado"}`);
    console.log(`Sistema Operativo: ${this.sistemaOperativo ?? "No especificado"}`);
  }
}
