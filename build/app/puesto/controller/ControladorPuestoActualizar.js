"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioPuestoActualizar_1 = __importDefault(require("../service/ServicioPuestoActualizar"));
const Puesto_1 = __importDefault(require("../model/Puesto"));
class ControladorPuestoActualizar extends ServicioPuestoActualizar_1.default {
    actualizarPuesto(req, res) {
        const objTemp = new Puesto_1.default(req.body.codPuesto, req.body.parqueadero, req.body.tipoVehiculo, req.body.detallePuesto);
        ServicioPuestoActualizar_1.default.actualizarPuesto(objTemp, res);
    }
}
const controladorPuestoActualizar = new ControladorPuestoActualizar();
exports.default = controladorPuestoActualizar;
