"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Puesto {
    constructor(codPuesto, parqueadero, tipoVehiculo, detallePuesto) {
        this._codPuesto = codPuesto;
        this._parqueadero = parqueadero;
        this._tipoVehiculo = tipoVehiculo;
        this._detallePuesto = detallePuesto;
    }
    get codPuesto() {
        return this._codPuesto;
    }
    set codPuesto(codPuesto) {
        this._codPuesto = codPuesto;
    }
    get parqueadero() {
        return this._parqueadero;
    }
    set parqueadero(parqueadero) {
        this._parqueadero = parqueadero;
    }
    get tipoVehiculo() {
        return this._tipoVehiculo;
    }
    set tipoVehiculo(tipoVehiculo) {
        this._tipoVehiculo = tipoVehiculo;
    }
    get detallePuesto() {
        return this._detallePuesto;
    }
    set detallePuesto(detallePuesto) {
        this._detallePuesto = detallePuesto;
    }
}
exports.default = Puesto;
