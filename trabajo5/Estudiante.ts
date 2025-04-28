import { Persona } from './Persona';

export class Estudiante extends Persona {
  presentarse(): string {
    return `Hola, soy el estudiante ${this.nombre}`;
  }
}
