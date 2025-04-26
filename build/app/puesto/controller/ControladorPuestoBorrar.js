"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioPuestoBorrar_1 = __importDefault(require("../service/ServicioPuestoBorrar"));
const Puesto_1 = __importDefault(require("../model/Puesto"));
const Parqueadero_1 = __importDefault(require("../../parqueadero/model/Parqueadero"));
const Ubicacion_1 = __importDefault(require("../../ubicacion/model/Ubicacion"));
const TipoVehiculo_1 = __importDefault(require("../../tipo-vehiculo/model/TipoVehiculo"));
class ControladorPuestoBorrar extends ServicioPuestoBorrar_1.default {
    borrarPuesto(req, res) {
        const codigo = Number(req.params.codPuesto);
        const objPuesto = new Puesto_1.default(codigo, new Parqueadero_1.default(0, new Ubicacion_1.default(0, 0, "", ""), "", "", ""), new TipoVehiculo_1.default(0, ""), "");
        ServicioPuestoBorrar_1.default.borrarPuesto(objPuesto, res);
    }
}
const controladorPuestoBorrar = new ControladorPuestoBorrar();
exports.default = controladorPuestoBorrar;
