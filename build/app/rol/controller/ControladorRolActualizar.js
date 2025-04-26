"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioRolActualizar_1 = __importDefault(require("../service/ServicioRolActualizar"));
const Rol_1 = __importDefault(require("../model/Rol"));
class ControladorRolActualizar extends ServicioRolActualizar_1.default {
    llamarActualizar(req, res) {
        const rol = new Rol_1.default(req.body.codRol, req.body.nombreRol);
        ServicioRolActualizar_1.default.actualizarRol(rol, res);
    }
}
const controladorRolActualizar = new ControladorRolActualizar();
exports.default = controladorRolActualizar;
