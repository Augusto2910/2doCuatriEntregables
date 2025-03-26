"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celular_1 = require("./celular");
// Crear una instancia de Celular
var miCelular = new celular_1.Celular("Samsung", "Galaxy S21", "Android");
console.log(miCelular.mostrarInfo());
miCelular.encenderApagar();
console.log(miCelular.mostrarInfo());
