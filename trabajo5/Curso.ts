import { Profesor } from './Profesor';
import { Persona } from './Persona';

export class Curso {
  participantes: Persona[] = [];

  constructor(public nombre: string, public responsable: Profesor) {}

  agregarParticipante(p: Persona): void {
    this.participantes.push(p);
  }

  listarParticipantes(): void {
    this.participantes.forEach((p, i) => {
      console.log(`${i + 1}. ${p.presentarse()}`);
    });
  }

  mostrarCursoInfo(): void {
    console.log(`Curso: ${this.nombre}`);
    console.log(`Responsable: ${this.responsable.presentarse()}`);
    console.log("Participantes:");
    this.listarParticipantes();
  }
}
