"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
var Celular = /** @class */ (function () {
    // Constructor
    function Celular(marca, modelo, sistemaOperativo, memoriaRAM, almacenamientoInterno, encendido) {
        if (memoriaRAM === void 0) { memoriaRAM = 4; }
        if (almacenamientoInterno === void 0) { almacenamientoInterno = 64; }
        if (encendido === void 0) { encendido = false; }
        this.marca = marca;
        this.modelo = modelo;
        this.sistemaOperativo = sistemaOperativo;
        this.memoriaRAM = memoriaRAM;
        this.almacenamientoInterno = almacenamientoInterno;
        this.encendido = encendido;
    }
    // Getters y Setters
    Celular.prototype.getMarca = function () {
        return this.marca;
    };
    Celular.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Celular.prototype.getModelo = function () {
        return this.modelo;
    };
    Celular.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Celular.prototype.getSistemaOperativo = function () {
        return this.sistemaOperativo;
    };
    Celular.prototype.setSistemaOperativo = function (sistemaOperativo) {
        this.sistemaOperativo = sistemaOperativo;
    };
    Celular.prototype.getMemoriaRAM = function () {
        return this.memoriaRAM;
    };
    Celular.prototype.setMemoriaRAM = function (memoriaRAM) {
        this.memoriaRAM = memoriaRAM;
    };
    Celular.prototype.getAlmacenamientoInterno = function () {
        return this.almacenamientoInterno;
    };
    Celular.prototype.setAlmacenamientoInterno = function (almacenamientoInterno) {
        this.almacenamientoInterno = almacenamientoInterno;
    };
    Celular.prototype.isEncendido = function () {
        return this.encendido;
    };
    // Método para encender/apagar
    Celular.prototype.encenderApagar = function () {
        this.encendido = !this.encendido;
    };
    // Método para mostrar información
    Celular.prototype.mostrarInfo = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", SO: ").concat(this.sistemaOperativo, ", RAM: ").concat(this.memoriaRAM, "GB, Almacenamiento: ").concat(this.almacenamientoInterno, "GB, Estado: ").concat(this.encendido ? 'Encendido' : 'Apagado');
    };
    return Celular;
}());
exports.Celular = Celular;
