"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServicioTipoVehiculoConsulta_1 = __importDefault(require("../service/ServicioTipoVehiculoConsulta"));
class ControladorTipoVehiculoConsulta extends ServicioTipoVehiculoConsulta_1.default {
    llamarObtenerTodos(raq, res) {
        ServicioTipoVehiculoConsulta_1.default.obtenerTodos(res);
    }
    llamarObtenerPorId(req, res) {
        const codigo = Number(req.params.codTipoVehiculo);
        ServicioTipoVehiculoConsulta_1.default.obtenerPorId(codigo, res);
    }
}
const controladorTipoVehiculoConsulta = new ControladorTipoVehiculoConsulta();
exports.default = controladorTipoVehiculoConsulta;
