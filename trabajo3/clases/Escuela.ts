import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Escuela {
  private alumnos: Alumno[] = [];
  private profesores: Profesor[] = [];

  matricularAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  expulsarAlumno(nombre: string): void {
    this.alumnos = this.alumnos.filter(alumno => alumno.nombre !== nombre);
  }

  contratarProfesor(profesor: Profesor): void {
    this.profesores.push(profesor);
  }

  despedirProfesor(nombre: string): void {
    this.profesores = this.profesores.filter(profesor => profesor.nombre !== nombre);
  }
}
