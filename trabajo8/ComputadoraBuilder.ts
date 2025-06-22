import { IBuilder } from "./IBuilder";
import { Computadora } from "./Computadora";

export class ComputadoraBuilder implements IBuilder {
  private procesador?: string;
  private ram?: string;
  private almacenamiento?: string;
  private tarjetaGrafica?: string;
  private sistemaOperativo?: string;

  public setProcesador(procesador: string): this {
    this.procesador = procesador;
    return this;
  }

  public setRAM(ram: string): this {
    this.ram = ram;
    return this;
  }

  public setAlmacenamiento(almacenamiento: string): this {
    this.almacenamiento = almacenamiento;
    return this;
  }

  public setTarjetaGrafica(tarjetaGrafica: string): this {
    this.tarjetaGrafica = tarjetaGrafica;
    return this;
  }

  public setSistemaOperativo(sistemaOperativo: string): this {
    this.sistemaOperativo = sistemaOperativo;
    return this;
  }

  public getProcesador(): string | undefined {
    return this.procesador;
  }

  public getRAM(): string | undefined {
    return this.ram;
  }

  public getAlmacenamiento(): string | undefined {
    return this.almacenamiento;
  }

  public getTarjetaGrafica(): string | undefined {
    return this.tarjetaGrafica;
  }

  public getSistemaOperativo(): string | undefined {
    return this.sistemaOperativo;
  }

  public build(): Computadora {
    return new Computadora(this);
  }
}
