import { IAnimal } from "./IAnimal";

export class Gato implements IAnimal {
  hacerSonido(): void {
    console.log("¡Miau!");
  }

  mover(): void {
    console.log("El gato se mueve.");
  }
}
