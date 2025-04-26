"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Acceso {
    constructor(codUsuario, correoAcceso, claveAcceso, uuidAcceso) {
        this._codUsuario = codUsuario;
        this._correoAcceso = correoAcceso;
        this._claveAcceso = claveAcceso;
        this._uuidAcceso = uuidAcceso;
    }
    get codUsuario() {
        return this._codUsuario;
    }
    set codUsuario(codUsuario) {
        this._codUsuario = codUsuario;
    }
    get correoAcceso() {
        return this._correoAcceso;
    }
    set correoAcceso(correoAcceso) {
        this._correoAcceso = correoAcceso;
    }
    get claveAcceso() {
        return this._claveAcceso;
    }
    set claveAcceso(claveAcceso) {
        this._claveAcceso = claveAcceso;
    }
    get uuidAcceso() {
        return this._uuidAcceso;
    }
    set uuidAcceso(uuidAcceso) {
        this._uuidAcceso = uuidAcceso;
    }
}
exports.default = Acceso;
