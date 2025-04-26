"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosParqueaderoActualizar = exports.datosParqueaderoBorrar = exports.validarCrearParqueadero = void 0;
const express_validator_1 = require("express-validator");
exports.validarCrearParqueadero = [
    (0, express_validator_1.body)("ubicacion", "La ubicación es requerida").notEmpty(),
    (0, express_validator_1.body)("nombreParqueadero", "El nombre del parqueadero es requerido").notEmpty(),
    (0, express_validator_1.body)("nombreParqueadero", "El nombre del parqueadero debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    (0, express_validator_1.body)("direccionParqueadero", "La dirección del parqueadero es requerida").notEmpty(),
    (0, express_validator_1.body)("direccionParqueadero", "La dirección del parqueadero debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    (0, express_validator_1.body)("telefonoParqueadero", "El teléfono del parqueadero es requerido").notEmpty(),
    (0, express_validator_1.body)("telefonoParqueadero", "El teléfono del parqueadero debe tener un mínimo de 7 caracteres").isLength({ min: 7 })
];
exports.datosParqueaderoBorrar = [
    (0, express_validator_1.param)("codParqueadero", "Código de parqueadero requerido debe ser número").isInt(),
    (0, express_validator_1.param)("codParqueadero", "Máximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosParqueaderoActualizar = [
    (0, express_validator_1.body)("codParqueadero", "El código del parqueadero es requerido").notEmpty(),
    (0, express_validator_1.body)("codParqueadero", "El código del parqueadero debe ser un número").isInt(),
    (0, express_validator_1.body)("ubicacion", "La ubicación es requerida").notEmpty(),
    (0, express_validator_1.body)("nombreParqueadero", "El nombre del parqueadero es requerido").notEmpty(),
    (0, express_validator_1.body)("nombreParqueadero", "El nombre del parqueadero debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    (0, express_validator_1.body)("direccionParqueadero", "La dirección del parqueadero es requerida").notEmpty(),
    (0, express_validator_1.body)("direccionParqueadero", "La dirección del parqueadero debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    (0, express_validator_1.body)("telefonoParqueadero", "El teléfono del parqueadero es requerido").notEmpty(),
    (0, express_validator_1.body)("telefonoParqueadero", "El teléfono del parqueadero debe tener un mínimo de 7 caracteres").isLength({ min: 7 })
];
