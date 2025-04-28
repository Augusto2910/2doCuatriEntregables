"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heladera = void 0;

var Electrodomestico_1 = require("./Electrodomestico");
var Heladera = /** @class */ (function (_super) {
    __extends(Heladera, _super);
    function Heladera(marca, modelo, temperatura) {
        var _this = _super.call(this, marca, modelo) || this;
        _this.temperatura = temperatura;
        return _this;
    }
    Heladera.prototype.cambiarTemperatura = function (nuevaTemp) {
        this.temperatura = nuevaTemp;
        console.log("Temperatura cambiada a ".concat(this.temperatura, "\u00B0C."));
    };
    Heladera.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("Temperatura: ".concat(this.temperatura, "\u00B0C"));
    };
    return Heladera;
}(Electrodomestico_1.Electrodomestico));
exports.Heladera = Heladera;
