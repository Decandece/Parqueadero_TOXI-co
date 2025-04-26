"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datosUserDelete = exports.datosUserUpdate = exports.datosUserCreate = exports.datosUserGet = void 0;
const express_validator_1 = require("express-validator");
// Validador para obtener usuario por ID o rol
exports.datosUserGet = [
    (0, express_validator_1.check)("codRol", "El código de rol es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codRol", "El código de rol debe ser numérico").isNumeric(),
];
// Validador para crear usuario
exports.datosUserCreate = [
    (0, express_validator_1.check)("codRol", "El código de rol es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codRol", "El código de rol debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("documentoUsuario", "El documento del usuario es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("documentoUsuario", "El documento debe tener entre 5 y 15 caracteres").isLength({ min: 5, max: 15 }),
    (0, express_validator_1.check)("nombresUsuario", "Los nombres del usuario son obligatorios")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("nombresUsuario", "Los nombres deben tener entre 2 y 50 caracteres").isLength({ min: 2, max: 50 }),
    (0, express_validator_1.check)("apellidosUsuario", "Los apellidos del usuario son obligatorios")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("apellidosUsuario", "Los apellidos deben tener entre 2 y 50 caracteres").isLength({ min: 2, max: 50 }),
    (0, express_validator_1.check)("generoUsuario", "El género del usuario es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("generoUsuario", "El género debe ser 1,2,3,4,5,6,7").isIn([
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
    ]),
    (0, express_validator_1.check)("fechaNacimientoUsuario", "La fecha de nacimiento es obligatoria")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("fechaNacimientoUsuario", "La fecha de nacimiento debe ser una fecha válida").isDate(),
    (0, express_validator_1.check)("telefonoUsuario", "El teléfono del usuario es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("telefonoUsuario", "El teléfono debe tener entre 7 y 15 caracteres").isLength({ min: 7, max: 15 }),
];
// Validador para actualizar usuario
exports.datosUserUpdate = [
    (0, express_validator_1.check)("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("codRol", "El código de rol es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codRol", "El código de rol debe ser numérico").isNumeric(),
    (0, express_validator_1.check)("documentoUsuario", "El documento del usuario es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("documentoUsuario", "El documento debe tener entre 5 y 15 caracteres").isLength({ min: 5, max: 15 }),
    (0, express_validator_1.check)("nombresUsuario", "Los nombres del usuario son obligatorios")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("nombresUsuario", "Los nombres deben tener entre 2 y 50 caracteres").isLength({ min: 2, max: 50 }),
    (0, express_validator_1.check)("apellidosUsuario", "Los apellidos del usuario son obligatorios")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("apellidosUsuario", "Los apellidos deben tener entre 2 y 50 caracteres").isLength({ min: 2, max: 50 }),
    (0, express_validator_1.check)("generoUsuario", "El género del usuario es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("generoUsuario", "El género debe ser un número entre 1 y 5").isIn([
        "1",
        "2",
        "3",
        "4",
        "5",
    ]),
    (0, express_validator_1.check)("fechaNacimientoUsuario", "La fecha de nacimiento es obligatoria")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("fechaNacimientoUsuario", "La fecha de nacimiento debe ser una fecha válida").isDate(),
    (0, express_validator_1.check)("telefonoUsuario", "El teléfono del usuario es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("telefonoUsuario", "El teléfono debe tener entre 7 y 15 caracteres").isLength({ min: 7, max: 15 }),
];
// Validador para eliminar usuario
exports.datosUserDelete = [
    (0, express_validator_1.check)("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
];
