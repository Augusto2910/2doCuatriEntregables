"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloWifi = void 0;

var ModuloWifi = /** @class */ (function () {
    function ModuloWifi(velocidadMbps, frecuenciaGHz) {
        this.velocidadMbps = velocidadMbps;
        this.frecuenciaGHz = frecuenciaGHz;
    }
    ModuloWifi.prototype.getVelocidad = function () {
        return this.velocidadMbps;
    };
    ModuloWifi.prototype.setVelocidad = function (valor) {
        this.velocidadMbps = valor;
    };
    ModuloWifi.prototype.getFrecuencia = function () {
        return this.frecuenciaGHz;
    };
    ModuloWifi.prototype.setFrecuencia = function (valor) {
        this.frecuenciaGHz = valor;
    };
    ModuloWifi.prototype.mostrarConexion = function () {
        console.log("Conexi\u00F3n WiFi: ".concat(this.velocidadMbps, " Mbps a ").concat(this.frecuenciaGHz, " GHz"));
    };
    return ModuloWifi;
}());
exports.ModuloWifi = ModuloWifi;
