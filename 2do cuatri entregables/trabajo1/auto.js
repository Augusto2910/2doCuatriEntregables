var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.velocidad = 0;
    }
    Auto.prototype.acelerar = function () {
        this.velocidad += 10;
        console.log("".concat(this.marca, " ").concat(this.modelo, " aceler\u00F3. Velocidad actual: ").concat(this.velocidad, " km/h"));
    };
    Auto.prototype.frenar = function () {
        if (this.velocidad > 0) {
            this.velocidad -= 10;
        }
        console.log("".concat(this.marca, " ").concat(this.modelo, " fren\u00F3. Velocidad actual: ").concat(this.velocidad, " km/h"));
    };
    return Auto;
}());


var auto1 = new Auto("Ford", "Focus", 2022);
var auto2 = new Auto("Ford", "Mustang", 2021);

auto1.acelerar(); 
auto1.acelerar(); 
auto1.frenar();   

auto2.acelerar(); 
auto2.frenar();   
