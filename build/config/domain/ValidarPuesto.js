"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosPuestoActualizar = exports.datosPuestoBorrar = exports.validarCrearPuesto = void 0;
const express_validator_1 = require("express-validator");
exports.validarCrearPuesto = [
    (0, express_validator_1.body)("parqueadero", "El parqueadero es requerido").notEmpty(),
    (0, express_validator_1.body)("tipoVehiculo", "El tipo de vehiculo es requerido").notEmpty()
];
exports.datosPuestoBorrar = [
    (0, express_validator_1.param)("codPuesto", "Código de puesto requerido debe ser número").isInt(),
    (0, express_validator_1.param)("codPuesto", "Máximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosPuestoActualizar = [
    (0, express_validator_1.body)("codPuesto", "El código del puesto es requerido").notEmpty(),
    (0, express_validator_1.body)("codPuesto", "El código del puesto debe ser un número").isInt(),
    (0, express_validator_1.body)("parqueadero", "El parqueadero es requerido").notEmpty(),
    (0, express_validator_1.body)("tipoVehiculo", "El tipo de vehiculo es requerido").notEmpty()
];
