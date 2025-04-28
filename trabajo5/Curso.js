"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(nombre, responsable) {
        this.nombre = nombre;
        this.responsable = responsable;
        this.participantes = [];
    }
    Curso.prototype.agregarParticipante = function (p) {
        this.participantes.push(p);
    };
    Curso.prototype.listarParticipantes = function () {
        this.participantes.forEach(function (p, i) {
            console.log("".concat(i + 1, ". ").concat(p.presentarse()));
        });
    };
    Curso.prototype.mostrarCursoInfo = function () {
        console.log("Curso: ".concat(this.nombre));
        console.log("Responsable: ".concat(this.responsable.presentarse()));
        console.log("Participantes:");
        this.listarParticipantes();
    };
    return Curso;
}());
exports.Curso = Curso;
