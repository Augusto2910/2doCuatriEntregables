"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    Alumno.prototype.estaAprobado = function () {
        return this.nota >= 7;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
