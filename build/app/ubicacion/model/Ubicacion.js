"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ubicacion {
    constructor(codUbicacion, codPadreUbicacion, codExternoUbicacion, nombreUbicacion) {
        this._codUbicacion = codUbicacion;
        this._codPadreUbicacion = codPadreUbicacion;
        this._codExternoUbicacion = codExternoUbicacion;
        this._nombreUbicacion = nombreUbicacion;
    }
    get codUbicacion() {
        return this._codUbicacion;
    }
    set codUbicacion(value) {
        this._codUbicacion = value;
    }
    get codPadreUbicacion() {
        return this._codPadreUbicacion;
    }
    set codPadreUbicacion(value) {
        this._codPadreUbicacion = value;
    }
    get codExternoUbicacion() {
        return this._codExternoUbicacion;
    }
    set codExternoUbicacion(value) {
        this._codExternoUbicacion = value;
    }
    get nombreUbicacion() {
        return this._nombreUbicacion;
    }
    set nombreUbicacion(value) {
        this._nombreUbicacion = value;
    }
}
exports.default = Ubicacion;
