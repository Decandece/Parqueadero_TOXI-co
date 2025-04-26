"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Acceso_1 = __importDefault(require("../model/Acceso"));
const ServicioSignIn_1 = __importDefault(require("../service/ServicioSignIn"));
class ControladorSignIn extends ServicioSignIn_1.default {
    llamarSignIn(req, res) {
        console.log("ControladorSignIn: ", req.body);
        const objTemp = new Acceso_1.default(0, "", "", "");
        objTemp.correoAcceso = req.body.correoAcceso;
        objTemp.claveAcceso = req.body.claveAcceso;
        ServicioSignIn_1.default.signIn(objTemp, res);
    }
}
const controladorSignIn = new ControladorSignIn();
exports.default = controladorSignIn;
