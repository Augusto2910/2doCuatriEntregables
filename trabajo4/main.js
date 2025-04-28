"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

var SmartHeladera_1 = require("./SmartHeladera");
var ModuloWifi_1 = require("./ModuloWifi");
// Crear un módulo WiFi
var wifi = new ModuloWifi_1.ModuloWifi(100, 5);
// Crear SmartHeladera
var miSmartHeladera = new SmartHeladera_1.SmartHeladera("Samsung", "SmartCool3000", 4, wifi);
// Pruebas
miSmartHeladera.encender();
miSmartHeladera.cambiarTemperatura(2);
miSmartHeladera.conectarInternet();
miSmartHeladera.mostrarInfo();
