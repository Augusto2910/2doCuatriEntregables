export class Alumno {
    constructor(public nombre: string, private nota: number) {}
  
    estaAprobado(): boolean {
      return this.nota >= 7;
    }
  
    getNota(): number {
      return this.nota;
    }
  }
  