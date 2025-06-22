import { IAnimal } from "./IAnimal";

export class Pajaro implements IAnimal {
  hacerSonido(): void {
    console.log("¡Pío pío!");
  }

  mover(): void {
    console.log("El pájaro vuela.");
  }
}
