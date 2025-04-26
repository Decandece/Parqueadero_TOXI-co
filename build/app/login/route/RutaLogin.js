"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControladorSignIn_1 = __importDefault(require("../controller/ControladorSignIn"));
const ValidarLogin_1 = require("../../../config/domain/ValidarLogin");
const ValidarDatos_1 = __importDefault(require("../../../middleware/ValidarDatos"));
class RutaLogin {
    constructor() {
        this.rutaLoginApi = (0, express_1.Router)();
        this.rutaLoginApi.post("/sign-in", ValidarLogin_1.validarLogin, ValidarDatos_1.default.ahora, ControladorSignIn_1.default.llamarSignIn);
    }
}
const rutaLogin = new RutaLogin();
exports.default = rutaLogin.rutaLoginApi;
