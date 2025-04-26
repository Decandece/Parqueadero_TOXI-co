"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Rol_1 = __importDefault(require("../model/Rol"));
const ServicioRolCrear_1 = __importDefault(require("../service/ServicioRolCrear"));
class ControladorRolCrear extends ServicioRolCrear_1.default {
    llamarCrearRol(req, res) {
        const objTemp = new Rol_1.default(0, "");
        objTemp.nombreRol = req.body.nombreRol;
        ServicioRolCrear_1.default.crearRol(objTemp, res);
    }
}
const controladorRolCrear = new ControladorRolCrear();
exports.default = controladorRolCrear;
