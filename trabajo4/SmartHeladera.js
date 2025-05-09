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
exports.SmartHeladera = void 0;

var Heladera_1 = require("./Heladera");
var SmartHeladera = /** @class */ (function (_super) {
    __extends(SmartHeladera, _super);
    function SmartHeladera(marca, modelo, temperatura, moduloWifi) {
        var _this = _super.call(this, marca, modelo, temperatura) || this;
        _this.moduloWifi = moduloWifi;
        return _this;
    }
    SmartHeladera.prototype.conectarInternet = function () {
        console.log("Conectando a internet...");
        this.moduloWifi.mostrarConexion();
    };
    SmartHeladera.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        this.moduloWifi.mostrarConexion();
    };
    return SmartHeladera;
}(Heladera_1.Heladera));
exports.SmartHeladera = SmartHeladera;
