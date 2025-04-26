"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TipoVehiculo {
    constructor(codTipoVehiculo, ClaseTipoVehiculo) {
        this._codTipoVehiculo = codTipoVehiculo;
        this._ClaseTipoVehiculo = ClaseTipoVehiculo;
    }
    get codTipoVehiculo() {
        return this._codTipoVehiculo;
    }
    set codTipoVehiculo(codTipoVehiculo) {
        this._codTipoVehiculo = codTipoVehiculo;
    }
    get ClaseTipoVehiculo() {
        return this._ClaseTipoVehiculo;
    }
    set ClaseTipoVehiculo(ClaseTipoVehiculo) {
        this._ClaseTipoVehiculo = ClaseTipoVehiculo;
    }
}
exports.default = TipoVehiculo;
