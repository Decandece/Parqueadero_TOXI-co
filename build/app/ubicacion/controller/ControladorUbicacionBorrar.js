"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioUbicacionBorrar_1 = __importDefault(require("../service/ServicioUbicacionBorrar"));
const Ubicacion_1 = __importDefault(require("../model/Ubicacion"));
class ControladorUbicacionBorrar extends ServicioUbicacionBorrar_1.default {
    llamarBorrarUbicacion(req, res) {
        const codigo = Number(req.params.codUbicacion);
        const objUbicacion = new Ubicacion_1.default(codigo, 0, "", "");
        ServicioUbicacionBorrar_1.default.borrarUbicacion(objUbicacion, res);
    }
}
const controladorUbicacionBorrar = new ControladorUbicacionBorrar();
exports.default = controladorUbicacionBorrar; //exporta una instancia
