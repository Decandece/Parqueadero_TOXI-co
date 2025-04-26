"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class ValidarDatos {
    ahora(req, res, next) {
        const errores = (0, express_validator_1.validationResult)(req);
        if (!errores.isEmpty()) {
            res.status(400).json({ errores: errores.array() });
        }
        else {
            next();
        }
    }
}
const validarDatos = new ValidarDatos();
exports.default = validarDatos;
