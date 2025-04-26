"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorVehiculoCrear_1 = __importDefault(require("../controller/ControladorVehiculoCrear"));
const ControladorVehiculoActualizar_1 = __importDefault(require("../controller/ControladorVehiculoActualizar"));
const ControladorVehiculoBorrar_1 = __importDefault(require("../controller/ControladorVehiculoBorrar"));
const ControladorVehiculoConsulta_1 = __importDefault(require("../controller/ControladorVehiculoConsulta"));
const ValidarVehiculo_1 = require("../../../config/domain/ValidarVehiculo");
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
class RutasVehiculo {
    constructor() {
        this.rutasVehiculoAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        // Ruta para obtener todos los vehículos
        this.rutasVehiculoAPI.get("/getall", ControladorVehiculoConsulta_1.default.llamarObtenerTodos);
        // Ruta para obtener vehículo por ID
        this.rutasVehiculoAPI.get("/:codVehiculo", ValidarVehiculo_1.datosVehiculoGet, ValidarDatos_1.default.ahora, ControladorVehiculoConsulta_1.default.llamarObtenerPorId);
        // Ruta para obtener vehículo por placa
        this.rutasVehiculoAPI.get("/placa/:placa", ValidarVehiculo_1.datosVehiculoGetPlaca, ValidarDatos_1.default.ahora, ControladorVehiculoConsulta_1.default.llamarObtenerPorPlaca);
        // Ruta para obtener vehículos por usuario
        this.rutasVehiculoAPI.get("/usuario/:codUsuario", ValidarVehiculo_1.datosVehiculoGetUsuario, ValidarDatos_1.default.ahora, ControladorVehiculoConsulta_1.default.llamarObtenerPorUsuario);
        // Ruta para obtener vehículos por tipo
        this.rutasVehiculoAPI.get("/tipo/:codTipoVehiculo", ValidarVehiculo_1.datosVehiculoGetTipo, ValidarDatos_1.default.ahora, ControladorVehiculoConsulta_1.default.llamarObtenerPorTipo);
        // Ruta para crear un vehículo
        this.rutasVehiculoAPI.post("/add", ValidarVehiculo_1.datosVehiculoCrear, ValidarDatos_1.default.ahora, ControladorVehiculoCrear_1.default.llamarGrabarVehiculo);
        // Ruta para actualizar un vehículo
        this.rutasVehiculoAPI.put("/update", ValidarVehiculo_1.datosVehiculoActualizar, ValidarDatos_1.default.ahora, ControladorVehiculoActualizar_1.default.llamarActualizar);
        // Ruta para eliminar un vehículo
        this.rutasVehiculoAPI.delete("/delete/:codVehiculo", ValidarVehiculo_1.datosVehiculoBorrar, ValidarDatos_1.default.ahora, ControladorVehiculoBorrar_1.default.llamarBorrar);
    }
}
const rutasVehiculo = new RutasVehiculo();
exports.default = rutasVehiculo.rutasVehiculoAPI;
