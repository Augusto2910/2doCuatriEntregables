// Clases tarjeta de credito, mercadopago, transferencia
var TarjetDeCredito = /** @class */ (function () {
    function TarjetDeCredito(pNumeroDeTarjeta) {
        this.cuotas = 12;
        this.entidad = "Visa";
        this.numeroDeTarjeta = pNumeroDeTarjeta;
    }
    TarjetDeCredito.prototype.procesarPago = function () {
        console.log("La tarjeta numero : ".concat(this.numeroDeTarjeta, " pertenece a la entidad: ").concat(this.entidad, " y se puede pagar hasta ").concat(this.cuotas, " cuotas  "));
    };
    TarjetDeCredito.prototype.cancelarPago = function () {
        console.log("El pago ha sido cancelado");
    };
    TarjetDeCredito.prototype.generarRecibo = function () {
        console.log("El pago de la tarjeta numero : ".concat(this.numeroDeTarjeta, " ha sido exitoso"));
    };
    return TarjetDeCredito;
}());
// implementar la interfaz IPago en las clases  mercadopago, transferencia 
var MercadoPago = /** @class */ (function () {
    function MercadoPago(pEmail, pAlias) {
        this.email = pEmail;
        this.alias = pAlias;
    }
    MercadoPago.prototype.procesarPago = function () {
        console.log("Procesando pago desde la cuenta de MercadoPago del alias: ".concat(this.alias, " y correo: ").concat(this.email));
    };
    MercadoPago.prototype.cancelarPago = function () {
        console.log("El pago a través de MercadoPago ha sido cancelado");
    };
    MercadoPago.prototype.generarRecibo = function () {
        console.log("El pago con MercadoPago (alias: ".concat(this.alias, ") se ha realizado con \u00E9xito"));
    };
    return MercadoPago;
}());
var Transferencia = /** @class */ (function () {
    function Transferencia(pCbu, pBanco) {
        this.cbu = pCbu;
        this.banco = pBanco;
    }
    Transferencia.prototype.procesarPago = function () {
        console.log("Procesando transferencia bancaria desde el banco ".concat(this.banco, " con CBU: ").concat(this.cbu));
    };
    Transferencia.prototype.cancelarPago = function () {
        console.log("La transferencia ha sido cancelada");
    };
    Transferencia.prototype.generarRecibo = function () {
        console.log("La transferencia desde el banco ".concat(this.banco, " fue exitosa"));
    };
    return Transferencia;
}());
// Ejemplo de uso
var pago1 = new TarjetDeCredito(1234567890123456);
pago1.procesarPago();
pago1.generarRecibo();
var pago2 = new MercadoPago("ejemplo@cliente.com", "alias.mercado");
pago2.procesarPago();
pago2.generarRecibo();
var pago3 = new Transferencia("1234567890123456789012", "Banco Nación");
pago3.procesarPago();
pago3.generarRecibo();
