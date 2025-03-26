import { Celular } from "./celular";

// Crear una instancia de Celular
const miCelular = new Celular("Samsung", "Galaxy S21", "Android");

console.log(miCelular.mostrarInfo());
miCelular.encenderApagar();
console.log(miCelular.mostrarInfo());
