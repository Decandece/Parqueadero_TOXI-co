"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarLogin = void 0;
const express_validator_1 = require("express-validator");
exports.validarLogin = [
    (0, express_validator_1.body)("correoAcceso", "El correo es requerido").notEmpty(),
    (0, express_validator_1.body)("correoAcceso", "El correo no es válido").isEmail(),
    (0, express_validator_1.body)("claveAcceso", "La clave es requerida").notEmpty(),
    //body("claveAcceso", "La clave debe tener mínimo 6 caracteres").isLength({ min: 6 }),
    //body("uuidAcceso", "El uuid es requerido").notEmpty(),
    //body("uuidAcceso", "El uuid debe tener 36 caracteres").isLength({ max: 36 }),
    //body("uuidAcceso", "El uuid no es válido").isUUID(4),
];
