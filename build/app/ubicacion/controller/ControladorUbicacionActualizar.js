"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioUbicacionActualizar_1 = __importDefault(require("../service/ServicioUbicacionActualizar"));
const Ubicacion_1 = __importDefault(require("../model/Ubicacion"));
class ControladorUbicacionActualizar extends ServicioUbicacionActualizar_1.default {
    llamarActualizarUbicacion(req, res) {
        const objTemp = new Ubicacion_1.default(req.body.codUbicacion, req.body.codPadreUbicacion, req.body.codExternoUbicacion, req.body.nombreUbicacion);
        ServicioUbicacionActualizar_1.default.actualizarUbicacion(objTemp, res);
    }
}
const controladorUbicacionActualizar = new ControladorUbicacionActualizar();
exports.default = controladorUbicacionActualizar; //exporta una instancia
