"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosTipoVehiculoGet = exports.datosTipoVehiculoBorrar = exports.datosTipoVehiculoActualizar = exports.datosTipoVehiculoCrear = void 0;
const express_validator_1 = require("express-validator");
// Validador para crear tipo de vehículo
exports.datosTipoVehiculoCrear = [
    (0, express_validator_1.check)("nombreTipoVehiculo", "El nombre del tipo de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("nombreTipoVehiculo", "El nombre debe tener entre 3 y 50 caracteres").isLength({ min: 3, max: 50 }),
    (0, express_validator_1.check)("tarifaTipoVehiculo", "La tarifa del tipo de vehículo es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("tarifaTipoVehiculo", "La tarifa debe ser numérica").isNumeric(),
];
// Validador para actualizar tipo de vehículo
exports.datosTipoVehiculoActualizar = [
    (0, express_validator_1.check)("codTipoVehiculo", "El código del tipo de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codTipoVehiculo", "El código del tipo de vehículo debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("nombreTipoVehiculo", "El nombre del tipo de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("nombreTipoVehiculo", "El nombre debe tener entre 3 y 50 caracteres").isLength({ min: 3, max: 50 }),
    (0, express_validator_1.check)("tarifaTipoVehiculo", "La tarifa del tipo de vehículo es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("tarifaTipoVehiculo", "La tarifa debe ser numérica").isNumeric(),
];
// Validador para eliminar tipo de vehículo
exports.datosTipoVehiculoBorrar = [
    (0, express_validator_1.check)("codTipoVehiculo", "El código del tipo de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codTipoVehiculo", "El código del tipo de vehículo debe ser numérico").isNumeric(),
];
// Validador para obtener tipo de vehículo por ID
exports.datosTipoVehiculoGet = [
    (0, express_validator_1.check)("codTipoVehiculo", "El código del tipo de vehículo es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codTipoVehiculo", "El código del tipo de vehículo debe ser numérico").isNumeric(),
];
