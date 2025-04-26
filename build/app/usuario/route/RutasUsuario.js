"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorUsuarioCrear_1 = __importDefault(require("../controller/ControladorUsuarioCrear"));
const ControladorUsuarioActualizar_1 = __importDefault(require("../controller/ControladorUsuarioActualizar"));
const ControladorUsuarioBorrar_1 = __importDefault(require("../controller/ControladorUsuarioBorrar"));
const ControladorUsuarioConsulta_1 = __importDefault(require("../controller/ControladorUsuarioConsulta"));
const ValidarUsuario_1 = require("../../../config/domain/ValidarUsuario");
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
class RutasUsuario {
    constructor() {
        this.rutasUsuarioAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        // Ruta para obtener todos los usuarios
        this.rutasUsuarioAPI.get("/getall", ControladorUsuarioConsulta_1.default.llamarObtenerTodos);
        // Ruta para obtener usuario por ID
        this.rutasUsuarioAPI.get("/:codUsuario", ValidarDatos_1.default.ahora, ControladorUsuarioConsulta_1.default.llamarObtenerPorId);
        // Ruta para obtener usuarios por rol
        this.rutasUsuarioAPI.get("/rol/:codRol", ValidarUsuario_1.datosUserGet, ValidarDatos_1.default.ahora, ControladorUsuarioConsulta_1.default.llamarObtenerPorRol);
        // Ruta para crear un usuario
        this.rutasUsuarioAPI.post("/add", ValidarUsuario_1.datosUserCreate, ValidarDatos_1.default.ahora, ControladorUsuarioCrear_1.default.llamarGrabarUsuario);
        // Ruta para actualizar un usuario
        this.rutasUsuarioAPI.put("/update", ValidarUsuario_1.datosUserUpdate, ValidarDatos_1.default.ahora, ControladorUsuarioActualizar_1.default.llamarActualizar);
        // Ruta para eliminar un usuario
        this.rutasUsuarioAPI.delete("/delete/:codUsuario", ValidarUsuario_1.datosUserDelete, ValidarDatos_1.default.ahora, ControladorUsuarioBorrar_1.default.llamarBorrar);
    }
}
const rutasUsuario = new RutasUsuario();
exports.default = rutasUsuario.rutasUsuarioAPI;
