"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;

var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(marca, modelo, estaEncendido) {
        if (estaEncendido === void 0) { estaEncendido = false; }
        this.marca = marca;
        this.modelo = modelo;
        this.estaEncendido = estaEncendido;
    }
    Electrodomestico.prototype.encender = function () {
        this.estaEncendido = true;
        console.log("".concat(this.marca, " ").concat(this.modelo, " encendida."));
    };
    Electrodomestico.prototype.apagar = function () {
        this.estaEncendido = false;
        console.log("".concat(this.marca, " ").concat(this.modelo, " apagada."));
    };
    Electrodomestico.prototype.mostrarInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Estado: ").concat(this.estaEncendido ? "Encendido" : "Apagado"));
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
