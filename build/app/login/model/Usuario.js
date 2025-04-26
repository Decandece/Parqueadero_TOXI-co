"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(codUsuario, codRol, documentoUsuario, nombresUsuario, apellidosUsuario, generoUsuario, fechaNacimientoUsuario, telefonoUsuario) {
        this._codUsuario = codUsuario;
        this._codRol = codRol;
        this._documentoUsuario = documentoUsuario;
        this._nombresUsuario = nombresUsuario;
        this._apellidosUsuario = apellidosUsuario;
        this._generoUsuario = generoUsuario;
        this._fechaNacimientoUsuario = fechaNacimientoUsuario;
        this._telefonoUsuario = telefonoUsuario;
    }
    // Getters y Setters
    get CodUsuario() {
        return this._codUsuario;
    }
    set CodUsuario(codUsuario) {
        this._codUsuario = codUsuario;
    }
    get CodRol() {
        return this._codRol;
    }
    set CodRol(codRol) {
        this._codRol = codRol;
    }
    get DocumentoUsuario() {
        return this._documentoUsuario;
    }
    set DocumentoUsuario(documentoUsuario) {
        this._documentoUsuario = documentoUsuario;
    }
    get NombresUsuario() {
        return this._nombresUsuario;
    }
    set NombresUsuario(nombresUsuario) {
        this._nombresUsuario = nombresUsuario;
    }
    get ApellidosUsuario() {
        return this._apellidosUsuario;
    }
    set ApellidosUsuario(apellidosUsuario) {
        this._apellidosUsuario = apellidosUsuario;
    }
    get GeneroUsuario() {
        return this._generoUsuario;
    }
    set GeneroUsuario(generoUsuario) {
        this._generoUsuario = generoUsuario;
    }
    get FechaNacimientoUsuario() {
        return this._fechaNacimientoUsuario;
    }
    set FechaNacimientoUsuario(fechaNacimientoUsuario) {
        this._fechaNacimientoUsuario = fechaNacimientoUsuario;
    }
    get TelefonoUsuario() {
        return this._telefonoUsuario;
    }
    set TelefonoUsuario(telefonoUsuario) {
        this._telefonoUsuario = telefonoUsuario;
    }
}
exports.default = Usuario;
