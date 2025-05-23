"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorRolConsulta_1 = __importDefault(require("../controller/ControladorRolConsulta"));
const ControladorRolCrear_1 = __importDefault(require("../controller/ControladorRolCrear"));
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
const ValidarRol_1 = require("../../../config/domain/ValidarRol");
const ControladorRolBorrar_1 = __importDefault(require("../controller/ControladorRolBorrar"));
const ControladorRolActualizar_1 = __importDefault(require("../controller/ControladorRolActualizar"));
class RutaRol {
    constructor() {
        this.rutaRolApi = (0, express_1.Router)();
        this.rutaRolApi.get("/getAll", ControladorRolConsulta_1.default.obtenerTodos);
        this.rutaRolApi.post("/add", ValidarRol_1.validarCrearRol, ValidarDatos_1.default.ahora, ControladorRolCrear_1.default.llamarCrearRol);
        this.rutaRolApi.delete("/delete/:codRol", ValidarRol_1.datosRolBorrar, ValidarDatos_1.default.ahora, ControladorRolBorrar_1.default.llamarBorrarRol); //hacer el validar
        this.rutaRolApi.put("/update", ValidarRol_1.datosRolActualizar, ValidarDatos_1.default.ahora, ControladorRolActualizar_1.default.llamarActualizar);
    }
}
const rutaRol = new RutaRol();
exports.default = rutaRol.rutaRolApi; // exporta una propiedad de una instancia
