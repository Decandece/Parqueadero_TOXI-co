"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorParqueaderoConsulta_1 = __importDefault(require("../controller/ControladorParqueaderoConsulta"));
const ControladorParqueaderoCrear_1 = __importDefault(require("../controller/ControladorParqueaderoCrear"));
const ControladorParqueaderoBorrar_1 = __importDefault(require("../controller/ControladorParqueaderoBorrar"));
const ControladorParqueaderoActualizar_1 = __importDefault(require("../controller/ControladorParqueaderoActualizar"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
const ValidarParqueadero_1 = require("../../../config/domain/ValidarParqueadero");
class RutaParqueadero {
    constructor() {
        this.rutaParqueaderoApi = (0, express_1.Router)();
        this.rutaParqueaderoApi.get("/getAll", ControladorParqueaderoConsulta_1.default.obtenerTodos);
        this.rutaParqueaderoApi.post("/add", ValidarParqueadero_1.validarCrearParqueadero, ValidarDatos_1.default.ahora, ControladorParqueaderoCrear_1.default.crearParqueadero);
        this.rutaParqueaderoApi.delete("/delete/:codParqueadero", ValidarParqueadero_1.datosParqueaderoBorrar, ValidarDatos_1.default.ahora, ControladorParqueaderoBorrar_1.default.borrarParqueadero);
        this.rutaParqueaderoApi.put("/update", ValidarParqueadero_1.datosParqueaderoActualizar, ValidarDatos_1.default.ahora, ControladorParqueaderoActualizar_1.default.actualizarParqueadero);
    }
}
const rutaParqueadero = new RutaParqueadero();
exports.default = rutaParqueadero.rutaParqueaderoApi;
