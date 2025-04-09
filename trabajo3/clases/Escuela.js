"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela() {
        this.alumnos = [];
        this.profesores = [];
    }
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.expulsarAlumno = function (nombre) {
        this.alumnos = this.alumnos.filter(function (alumno) { return alumno.nombre !== nombre; });
    };
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.despedirProfesor = function (nombre) {
        this.profesores = this.profesores.filter(function (profesor) { return profesor.nombre !== nombre; });
    };
    return Escuela;
}());
exports.Escuela = Escuela;
