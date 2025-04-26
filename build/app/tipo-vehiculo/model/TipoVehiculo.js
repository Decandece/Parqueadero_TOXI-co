"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TipoVehiculo {
    constructor(cod, cla) {
        this._codTipoVehiculo = cod;
        this._claseTipoVehiculo = cla;
    }
    get codTipoVehiculo() {
        return this._codTipoVehiculo;
    }
    get claseTipoVehiculo() {
        return this._claseTipoVehiculo;
    }
    set codTipoVehiculo(cod) {
        this._codTipoVehiculo = cod;
    }
    set claseTipoVehiculo(cla) {
        this._claseTipoVehiculo = cla;
    }
}
exports.default = TipoVehiculo;
