class Auto {
  marca: string;
  modelo: string;
  anio: number;
  velocidad: number;

  constructor(marca: string, modelo: string, anio: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.velocidad = 0;
  }

  acelerar(): void {
    this.velocidad += 10;
    console.log(`${this.marca} ${this.modelo} aceleró. Velocidad actual: ${this.velocidad} km/h`);
  }

  frenar(): void {
    if (this.velocidad > 0) {
      this.velocidad -= 10;
    }
    console.log(`${this.marca} ${this.modelo} frenó. Velocidad actual: ${this.velocidad} km/h`);
  }
}

const auto1 = new Auto("Toyota", "Corolla", 2022);
const auto2 = new Auto("Ford", "Mustang", 2021);

auto1.acelerar(); 
auto1.acelerar(); 
auto1.frenar();   

auto2.acelerar(); 
auto2.frenar();   

