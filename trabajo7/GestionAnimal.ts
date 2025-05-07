// 1. Definir la Interfaz
interface IAnimal {
    emitirSonido(): void;
    moverse(): void;
  }
  
  // 2. Crear la Clase Abstracta
  abstract class Animal implements IAnimal {
    constructor(protected name: string) {}
  
    moverse(): void {
      console.log(`${this.name} se mueve...`);
    }
  
    abstract emitirSonido(): void;
    abstract tipoDeDieta(): void;
  }
  
  // 3. Crear Subclases
  
  class Perro extends Animal {
    emitirSonido(): void {
      console.log("¡Guau!");
    }
  
    tipoDeDieta(): void {
      console.log("Dieta: Carnívoro");
    }
  }
  
  class Gato extends Animal {
    emitirSonido(): void {
      console.log("¡Miau!");
    }
  
    tipoDeDieta(): void {
      console.log("Dieta: Carnívoro");
    }
  }
  
  // 4. Instanciar y Probar
  
  const perro = new Perro("Firulais");
  perro.emitirSonido();  
  perro.moverse();     
  perro.tipoDeDieta();  
  
  const gato = new Gato("Michi");
  gato.emitirSonido();   
  gato.moverse();        
  gato.tipoDeDieta();    
  