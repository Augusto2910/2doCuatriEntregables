"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }
    Profesor.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Profesor.prototype.removerAlumno = function (nombre) {
        this.alumnos = this.alumnos.filter(function (alumno) { return alumno.nombre !== nombre; });
    };
    return Profesor;
}());
exports.Profesor = Profesor;
