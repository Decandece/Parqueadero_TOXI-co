"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioPuestoCrear_1 = __importDefault(require("../service/ServicioPuestoCrear"));
const Puesto_1 = __importDefault(require("../model/Puesto"));
class ControladorPuestoCrear extends ServicioPuestoCrear_1.default {
    crearPuesto(req, res) {
        const objTemp = new Puesto_1.default(0, req.body.parqueadero, req.body.tipoVehiculo, req.body.detallePuesto);
        ServicioPuestoCrear_1.default.crearPuesto(objTemp, res);
    }
}
const controladorPuestoCrear = new ControladorPuestoCrear();
exports.default = controladorPuestoCrear;
