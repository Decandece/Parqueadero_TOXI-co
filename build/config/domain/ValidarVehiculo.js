"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosVehiculoGetTipo = exports.datosVehiculoGetUsuario = exports.datosVehiculoGetPlaca = exports.datosVehiculoGet = exports.datosVehiculoBorrar = exports.datosVehiculoActualizar = exports.datosVehiculoCrear = void 0;
const express_validator_1 = require("express-validator");
// Validador para crear vehículo
exports.datosVehiculoCrear = [
    (0, express_validator_1.check)("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("codTipoVehiculo", "El código de tipo de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codTipoVehiculo", "El código de tipo de vehículo debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("placaVehiculo", "La placa del vehículo es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("placaVehiculo", "La placa debe tener entre 5 y 10 caracteres").isLength({ min: 5, max: 10 }),
    (0, express_validator_1.check)("modeloVehiculo", "El modelo del vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("modeloVehiculo", "El modelo debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("colorVehiculo", "El color del vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("colorVehiculo", "El color debe tener entre 3 y 20 caracteres").isLength({ min: 3, max: 20 }),
];
// Validador para actualizar vehículo
exports.datosVehiculoActualizar = [
    (0, express_validator_1.check)("codVehiculo", "El código de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codVehiculo", "El código de vehículo debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("codTipoVehiculo", "El código de tipo de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codTipoVehiculo", "El código de tipo de vehículo debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("placaVehiculo", "La placa del vehículo es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("placaVehiculo", "La placa debe tener entre 5 y 10 caracteres").isLength({ min: 5, max: 10 }),
    (0, express_validator_1.check)("modeloVehiculo", "El modelo del vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("modeloVehiculo", "El modelo debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("colorVehiculo", "El color del vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("colorVehiculo", "El color debe tener entre 3 y 20 caracteres").isLength({ min: 3, max: 20 }),
];
// Validador para eliminar vehículo
exports.datosVehiculoBorrar = [
    (0, express_validator_1.check)("codVehiculo", "El código de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codVehiculo", "El código de vehículo debe ser numérico").isNumeric(),
];
// Validador para obtener vehículo por ID
exports.datosVehiculoGet = [
    (0, express_validator_1.check)("codVehiculo", "El código de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codVehiculo", "El código de vehículo debe ser numérico").isNumeric(),
];
// Validador para obtener vehículo por placa
exports.datosVehiculoGetPlaca = [
    (0, express_validator_1.check)("placa", "La placa del vehículo es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("placa", "La placa debe tener entre 5 y 10 caracteres").isLength({ min: 5, max: 10 }),
];
// Validador para obtener vehículos por usuario
exports.datosVehiculoGetUsuario = [
    (0, express_validator_1.check)("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
];
// Validador para obtener vehículos por tipo
exports.datosVehiculoGetTipo = [
    (0, express_validator_1.check)("codTipoVehiculo", "El código de tipo de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codTipoVehiculo", "El código de tipo de vehículo debe ser numérico").isNumeric(),
];
