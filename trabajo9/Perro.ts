import { IAnimal } from "./IAnimal";

export class Perro implements IAnimal {
  hacerSonido(): void {
    console.log("¡Guau guau!");
  }

  mover(): void {
    console.log("El perro corre.");
  }
}
