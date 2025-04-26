"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosRolActualizar = exports.datosRolBorrar = exports.validarCrearRol = void 0;
const express_validator_1 = require("express-validator");
exports.validarCrearRol = [
    (0, express_validator_1.body)("nombreRol", "El nombre del rol es requerido").notEmpty(),
    (0, express_validator_1.body)("nombreRol", "El nombre del rol debe tener un mínimo de 3 caracteres").isLength({ min: 5 })
];
exports.datosRolBorrar = [
    (0, express_validator_1.param)("codRol", "Rol requeridodebe ser numero").isInt(),
    (0, express_validator_1.param)("codRol", "maximo 6 caracteres").isLength({ max: 6 }),
];
exports.datosRolActualizar = [
    (0, express_validator_1.body)("codRol", "El código del rol es requerido").notEmpty(),
    (0, express_validator_1.body)("codRol", "El código del rol debe ser un número").isInt(),
    (0, express_validator_1.body)("nombreRol", "El nombre del rol es requerido").trim().notEmpty(),
    (0, express_validator_1.body)("nombreRol", "El nombre del rol debe tener un mínimo de 3 caracteres").isLength({ min: 5 })
];
