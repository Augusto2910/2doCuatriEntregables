export class ModuloWifi {
    constructor(
      private velocidadMbps: number,
      private frecuenciaGHz: number
    ) {}
  
    getVelocidad(): number {
      return this.velocidadMbps;
    }
  
    setVelocidad(valor: number): void {
      this.velocidadMbps = valor;
    }
  
    getFrecuencia(): number {
      return this.frecuenciaGHz;
    }
  
    setFrecuencia(valor: number): void {
      this.frecuenciaGHz = valor;
    }
  
    mostrarConexion(): void {
      console.log(`Conexión WiFi: ${this.velocidadMbps} Mbps a ${this.frecuenciaGHz} GHz`);
    }
  }
  