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
class RutasVehiculo {
    constructor() {
        this.rutasVehiculoAPI = (0, express_1.Router)();
        this.configurarRutas();
    }
    configurarRutas() {
        this.rutasVehiculoAPI.get("/getall", ControladorVehiculoConsulta_1.default.llamarObtenerTodos);
        this.rutasVehiculoAPI.post("/add", ControladorVehiculoCrear_1.default.llamarGrabarVehiculo);
        this.rutasVehiculoAPI.put("/update", ControladorVehiculoActualizar_1.default.llamarActualizar);
        this.rutasVehiculoAPI.delete("/delete/:codVehiculo", ControladorVehiculoBorrar_1.default.llamarBorrar);
    }
}
const rutasVehiculo = new RutasVehiculo();
exports.default = rutasVehiculo.rutasVehiculoAPI;
