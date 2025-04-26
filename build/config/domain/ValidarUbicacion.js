"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosUbicacionActualizar = exports.datosUbicacionBorrar = exports.validarCrearUbicacion = void 0;
const express_validator_1 = require("express-validator");
exports.validarCrearUbicacion = [
    (0, express_validator_1.body)("codPadreUbicacion", "El código de la ubicación padre es requerido").notEmpty(),
    (0, express_validator_1.body)("codPadreUbicacion", "El código de la ubicación padre debe ser un número").isInt(),
    (0, express_validator_1.body)("codExternoUbicacion", "El código externo de la ubicación es requerido").notEmpty(),
    (0, express_validator_1.body)("codExternoUbicacion", "El código externo de la ubicación debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    (0, express_validator_1.body)("nombreUbicacion", "El nombre de la ubicación es requerido").notEmpty(),
    (0, express_validator_1.body)("nombreUbicacion", "El nombre de la ubicación debe tener un mínimo de 3 caracteres").isLength({ min: 3 })
];
exports.datosUbicacionBorrar = [
    (0, express_validator_1.param)("codUbicacion", "Ubicación requerida debe ser numero").isInt(),
    (0, express_validator_1.param)("codUbicacion", "maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosUbicacionActualizar = [
    (0, express_validator_1.body)("codUbicacion", "El código de la ubicación es requerido").notEmpty(),
    (0, express_validator_1.body)("codUbicacion", "El código de la ubicación debe ser un número").isInt(),
    (0, express_validator_1.body)("codPadreUbicacion", "El código de la ubicación padre es requerido").notEmpty(),
    (0, express_validator_1.body)("codPadreUbicacion", "El código de la ubicación padre debe ser un número").isInt(),
    (0, express_validator_1.body)("codExternoUbicacion", "El código externo de la ubicación es requerido").notEmpty(),
    (0, express_validator_1.body)("codExternoUbicacion", "El código externo de la ubicación debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    (0, express_validator_1.body)("nombreUbicacion", "El nombre de la ubicación es requerido").notEmpty(),
    (0, express_validator_1.body)("nombreUbicacion", "El nombre de la ubicación debe tener un mínimo de 3 caracteres").isLength({ min: 3 })
];
