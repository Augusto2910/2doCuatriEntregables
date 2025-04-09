import { Escuela } from "./clases/Escuela";
import { Profesor } from "./clases/Profesor";
import { Alumno } from "./clases/Alumno";

const escuela = new Escuela();
const profesor1 = new Profesor("Sr. Espinoza");
const alumno1 = new Alumno("Franco", 8);
const alumno2 = new Alumno("Micaela", 6);

escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.contratarProfesor(profesor1);

profesor1.agregarAlumno(alumno1);
profesor1.agregarAlumno(alumno2);

console.log(alumno1.nombre, "está aprobado:", alumno1.estaAprobado());
console.log(alumno2.nombre, "está aprobado:", alumno2.estaAprobado());
