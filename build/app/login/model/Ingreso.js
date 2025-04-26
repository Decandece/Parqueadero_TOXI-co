"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ingreso {
    constructor(codIngreso, codUsuario, fechaIngreso, horaIngreso) {
        this._codIngreso = codIngreso;
        this._codUsuario = codUsuario;
        this._fechaIngreso = fechaIngreso;
        this._horaIngreso = horaIngreso;
    }
    get codIngreso() {
        return this._codIngreso;
    }
    set codIngreso(codIngreso) {
        this._codIngreso = codIngreso;
    }
    get codUsuario() {
        return this._codUsuario;
    }
    set codUsuario(codUsuario) {
        this._codUsuario = codUsuario;
    }
    get fechaIngreso() {
        return this._fechaIngreso;
    }
    set fechaIngreso(fechaIngreso) {
        this._fechaIngreso = fechaIngreso;
    }
    get horaIngreso() {
        return this._horaIngreso;
    }
    set horaIngreso(horaIngreso) {
        this._horaIngreso = horaIngreso;
    }
}
exports.default = Ingreso;
