"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parqueadero {
    constructor(codParqueadero, ubicacion, nombreParqueadero, direccionParqueadero, telefonoParqueadero) {
        this._codParqueadero = codParqueadero;
        this._ubicacion = ubicacion;
        this._nombreParqueadero = nombreParqueadero;
        this._direccionParqueadero = direccionParqueadero;
        this._telefonoParqueadero = telefonoParqueadero;
    }
    get codParqueadero() {
        return this._codParqueadero;
    }
    set codParqueadero(codParqueadero) {
        this._codParqueadero = codParqueadero;
    }
    get ubicacion() {
        return this._ubicacion;
    }
    set ubicacion(ubicacion) {
        this._ubicacion = ubicacion;
    }
    get nombreParqueadero() {
        return this._nombreParqueadero;
    }
    set nombreParqueadero(nombreParqueadero) {
        this._nombreParqueadero = nombreParqueadero;
    }
    get direccionParqueadero() {
        return this._direccionParqueadero;
    }
    set direccionParqueadero(direccionParqueadero) {
        this._direccionParqueadero = direccionParqueadero;
    }
    get telefonoParqueadero() {
        return this._telefonoParqueadero;
    }
    set telefonoParqueadero(telefonoParqueadero) {
        this._telefonoParqueadero = telefonoParqueadero;
    }
}
exports.default = Parqueadero;
