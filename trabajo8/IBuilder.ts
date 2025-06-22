export interface IBuilder {
    setProcesador(procesador: string): this;
    setRAM(ram: string): this;
    setAlmacenamiento(almacenamiento: string): this;
    setTarjetaGrafica(tarjetaGrafica: string): this;
    setSistemaOperativo(sistemaOperativo: string): this;
    build(): Computadora;
  }
  