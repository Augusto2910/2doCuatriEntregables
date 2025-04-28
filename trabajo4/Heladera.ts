import { Electrodomestico } from './Electrodomestico';

export class Heladera extends Electrodomestico {
  constructor(
    marca: string,
    modelo: string,
    public temperatura: number
  ) {
    super(marca, modelo);
  }

  cambiarTemperatura(nuevaTemp: number): void {
    this.temperatura = nuevaTemp;
    console.log(`Temperatura cambiada a ${this.temperatura}°C.`);
  }

  override mostrarInfo(): void {
    super.mostrarInfo();
    console.log(`Temperatura: ${this.temperatura}°C`);
  }
}
