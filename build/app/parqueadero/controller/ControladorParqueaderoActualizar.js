"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioParqueaderoActualizar_1 = __importDefault(require("../service/ServicioParqueaderoActualizar"));
const Parqueadero_1 = __importDefault(require("../model/Parqueadero"));
class ControladorParqueaderoActualizar extends ServicioParqueaderoActualizar_1.default {
    actualizarParqueadero(req, res) {
        const objTemp = new Parqueadero_1.default(req.body.codParqueadero, req.body.ubicacion, req.body.nombreParqueadero, req.body.direccionParqueadero, req.body.telefonoParqueadero);
        ServicioParqueaderoActualizar_1.default.actualizarParqueadero(objTemp, res);
    }
}
const controladorParqueaderoActualizar = new ControladorParqueaderoActualizar();
exports.default = controladorParqueaderoActualizar;
