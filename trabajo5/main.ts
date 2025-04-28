import { Profesor } from './Profesor';
import { Estudiante } from './Estudiante';
import { Curso } from './Curso';

const profe1 = new Profesor("Pia");
const est1 = new Estudiante("Franco");
const est2 = new Estudiante("Lucrecia");

const cursoPintura = new Curso("Pintura Moderna", profe1);

cursoPintura.agregarParticipante(est1);
cursoPintura.agregarParticipante(est2);

cursoPintura.mostrarCursoInfo();
