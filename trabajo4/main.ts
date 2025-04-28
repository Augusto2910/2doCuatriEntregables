import { SmartHeladera } from './SmartHeladera';
import { ModuloWifi } from './ModuloWifi';

// Crear un módulo WiFi
const wifi = new ModuloWifi(100, 5);

// Crear SmartHeladera
const miSmartHeladera = new SmartHeladera("Samsung", "SmartCool3000", 4, wifi);

// Pruebas
miSmartHeladera.encender();
miSmartHeladera.cambiarTemperatura(2);
miSmartHeladera.conectarInternet();
miSmartHeladera.mostrarInfo();
