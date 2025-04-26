"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioUbicacionCrear_1 = __importDefault(require("../service/ServicioUbicacionCrear"));
const Ubicacion_1 = __importDefault(require("../model/Ubicacion"));
class ControladorUbicacionCrear extends ServicioUbicacionCrear_1.default {
    llamarCrearUbicacion(req, res) {
        const objTemp = new Ubicacion_1.default(0, 0, "", "");
        objTemp.codPadreUbicacion = req.body.codPadreUbicacion;
        objTemp.codExternoUbicacion = req.body.codExternoUbicacion;
        objTemp.nombreUbicacion = req.body.nombreUbicacion;
        ServicioUbicacionCrear_1.default.crearUbicacion(objTemp, res);
    }
}
const controladorUbicacionCrear = new ControladorUbicacionCrear();
exports.default = controladorUbicacionCrear; //exporta una instancia
