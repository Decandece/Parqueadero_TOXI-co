"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorPuestoConsulta_1 = __importDefault(require("../controller/ControladorPuestoConsulta"));
const ValidarPuesto_1 = require("../../../config/domain/ValidarPuesto");
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
const ControladorPuestoCrear_1 = __importDefault(require("../controller/ControladorPuestoCrear"));
const ControladorPuestoBorrar_1 = __importDefault(require("../controller/ControladorPuestoBorrar"));
const ControladorPuestoActualizar_1 = __importDefault(require("../controller/ControladorPuestoActualizar"));
class RutaPuesto {
    constructor() {
        this.rutaPuestoApi = (0, express_1.Router)();
        this.rutaPuestoApi.get("/getAll", ControladorPuestoConsulta_1.default.obtenerTodos);
        this.rutaPuestoApi.post("/add", ValidarPuesto_1.validarCrearPuesto, ValidarDatos_1.default.ahora, ControladorPuestoCrear_1.default.crearPuesto);
        this.rutaPuestoApi.delete("/delete/:codPuesto", ValidarPuesto_1.datosPuestoBorrar, ValidarDatos_1.default.ahora, ControladorPuestoBorrar_1.default.borrarPuesto);
        this.rutaPuestoApi.put("/update", ValidarPuesto_1.datosPuestoActualizar, ValidarDatos_1.default.ahora, ControladorPuestoActualizar_1.default.actualizarPuesto);
    }
}
const rutaPuesto = new RutaPuesto();
exports.default = rutaPuesto.rutaPuestoApi;
