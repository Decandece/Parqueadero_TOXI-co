"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rol {
    constructor(codRol, nombreRol) {
        this._codRol = codRol;
        this._nombreRol = nombreRol;
    }
    get codRol() {
        return this._codRol;
    }
    set codRol(codRol) {
        this._codRol = codRol;
    }
    get nombreRol() {
        return this._nombreRol;
    }
    set nombreRol(nombreRol) {
        this._nombreRol = nombreRol;
    }
}
exports.default = Rol;
