import { ComputadoraBuilder } from "./ComputadoraBuilder";

const miPC = new ComputadoraBuilder()
  .setProcesador("AMD Ryzen 9")
  .setRAM("64GB")
  .setAlmacenamiento("2TB NVMe SSD")
  .setTarjetaGrafica("NVIDIA RTX 4090")
  .setSistemaOperativo("Windows 11")
  .build();

miPC.mostrarConfiguracion();
