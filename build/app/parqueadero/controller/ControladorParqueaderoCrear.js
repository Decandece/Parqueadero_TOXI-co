"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioParqueaderoCrear_1 = __importDefault(require("../service/ServicioParqueaderoCrear"));
const Parqueadero_1 = __importDefault(require("../model/Parqueadero"));
class ControladorParqueaderoCrear extends ServicioParqueaderoCrear_1.default {
    crearParqueadero(req, res) {
        const objTemp = new Parqueadero_1.default(0, req.body.ubicacion, req.body.nombreParqueadero, req.body.direccionParqueadero, req.body.telefonoParqueadero);
        ServicioParqueaderoCrear_1.default.crearParqueadero(objTemp, res);
    }
}
const controladorParqueaderoCrear = new ControladorParqueaderoCrear();
exports.default = controladorParqueaderoCrear;
