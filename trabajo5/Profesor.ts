import { Persona } from './Persona';

export class Profesor extends Persona {
  presentarse(): string {
    return `Hola, soy el profesor ${this.nombre}`;
  }
}
