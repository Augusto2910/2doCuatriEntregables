interface IPago {
  procesarPago(): void;
  cancelarPago(): void;
  generarRecibo(): void;
}

// Clases tarjeta de credito, mercadopago, transferencia

class TarjetDeCredito implements IPago {
  private cuotas: number;
  private entidad: string;
  private numeroDeTarjeta: number;

  constructor(pNumeroDeTarjeta: number) {
    this.cuotas = 12;
    this.entidad = "Visa";
    this.numeroDeTarjeta = pNumeroDeTarjeta;
  }

  procesarPago(): void {
    console.log(`La tarjeta numero : ${this.numeroDeTarjeta} pertenece a la entidad: ${this.entidad} y se puede pagar hasta ${this.cuotas} cuotas  `)
  }

  cancelarPago(): void {
    console.log("El pago ha sido cancelado")
  }

  generarRecibo(): void {
    console.log(`El pago de la tarjeta numero : ${this.numeroDeTarjeta} ha sido exitoso`)
  }

}

// implementar la interfaz IPago en las clases  mercadopago, transferencia 

class MercadoPago implements IPago {
  private email: string;
  private alias: string;

  constructor(pEmail: string, pAlias: string) {
    this.email = pEmail;
    this.alias = pAlias;
  }

  procesarPago(): void {
    console.log(`Procesando pago desde la cuenta de MercadoPago del alias: ${this.alias} y correo: ${this.email}`);
  }

  cancelarPago(): void {
    console.log("El pago a través de MercadoPago ha sido cancelado");
  }

  generarRecibo(): void {
    console.log(`El pago con MercadoPago (alias: ${this.alias}) se ha realizado con éxito`);
  }
}

class Transferencia implements IPago {
  private cbu: string;
  private banco: string;

  constructor(pCbu: string, pBanco: string) {
    this.cbu = pCbu;
    this.banco = pBanco;
  }

  procesarPago(): void {
    console.log(`Procesando transferencia bancaria desde el banco ${this.banco} con CBU: ${this.cbu}`);
  }

  cancelarPago(): void {
    console.log("La transferencia ha sido cancelada");
  }

  generarRecibo(): void {
    console.log(`La transferencia desde el banco ${this.banco} fue exitosa`);
  }
}

// Ejemplo de uso
const pago1: IPago = new TarjetDeCredito(1234567890123456);
pago1.procesarPago();
pago1.generarRecibo();

const pago2: IPago = new MercadoPago("ejemplo@cliente.com", "alias.mercado");
pago2.procesarPago();
pago2.generarRecibo();

const pago3: IPago = new Transferencia("1234567890123456789012", "Banco Nación");
pago3.procesarPago();
pago3.generarRecibo();