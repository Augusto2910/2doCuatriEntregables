var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 2. Crear la Clase Abstracta
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.moverse = function () {
        console.log("".concat(this.name, " se mueve..."));
    };
    return Animal;
}());
// 3. Crear Subclases
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.emitirSonido = function () {
        console.log("¡Guau!");
    };
    Perro.prototype.tipoDeDieta = function () {
        console.log("Dieta: Carnívoro");
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.emitirSonido = function () {
        console.log("¡Miau!");
    };
    Gato.prototype.tipoDeDieta = function () {
        console.log("Dieta: Carnívoro");
    };
    return Gato;
}(Animal));
// 4. Instanciar y Probar
var perro = new Perro("Firulais");
perro.emitirSonido();
perro.moverse();
perro.tipoDeDieta();
var gato = new Gato("Michi");
gato.emitirSonido();
gato.moverse();
gato.tipoDeDieta();
