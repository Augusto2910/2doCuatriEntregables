import { Alumno } from "./Alumno";

export class Profesor {
  alumnos: Alumno[] = [];

  constructor(public nombre: string) {}

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  removerAlumno(nombre: string): void {
    this.alumnos = this.alumnos.filter(alumno => alumno.nombre !== nombre);
  }
}
