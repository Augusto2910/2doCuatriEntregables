import { FabricaAnimales } from "./FabricaAnimales";

const animal1 = FabricaAnimales.crearAnimal("perro");
const animal2 = FabricaAnimales.crearAnimal("gato");
const animal3 = FabricaAnimales.crearAnimal("pajaro");

if (animal1) {
  animal1.hacerSonido();
  animal1.mover();
}

if (animal2) {
  animal2.hacerSonido();
  animal2.mover();
}

if (animal3) {
  animal3.hacerSonido();
  animal3.mover();
}
