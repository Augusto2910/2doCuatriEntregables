import { Heladera } from './Heladera';
import { ModuloWifi } from './ModuloWifi';

export class SmartHeladera extends Heladera {
  constructor(
    marca: string,
    modelo: string,
    temperatura: number,
    public moduloWifi: ModuloWifi
  ) {
    super(marca, modelo, temperatura);
  }

  conectarInternet(): void {
    console.log("Conectando a internet...");
    this.moduloWifi.mostrarConexion();
  }

  override mostrarInfo(): void {
    super.mostrarInfo();
    this.moduloWifi.mostrarConexion();
  }
}
