"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioParqueaderoBorrar_1 = __importDefault(require("../service/ServicioParqueaderoBorrar"));
const Parqueadero_1 = __importDefault(require("../model/Parqueadero"));
const Ubicacion_1 = __importDefault(require("../../ubicacion/model/Ubicacion"));
class ControladorParqueaderoBorrar extends ServicioParqueaderoBorrar_1.default {
    borrarParqueadero(req, res) {
        const codigo = Number(req.params.codParqueadero);
        const objParqueadero = new Parqueadero_1.default(codigo, new Ubicacion_1.default(0, 0, "", ""), "", "", "");
        ServicioParqueaderoBorrar_1.default.borrarParqueadero(objParqueadero, res);
    }
}
const controladorParqueaderoBorrar = new ControladorParqueaderoBorrar();
exports.default = controladorParqueaderoBorrar;
