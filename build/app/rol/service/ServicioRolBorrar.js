"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_rol_1 = require("../repository/sql_rol");
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
class ServicioRolBorrar {
    static borrar(rol, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => {
                return dbConnection_1.default.result(sql_rol_1.SQL_ROL.DELETE, [rol.codRol]); //Ojo con el RESULT UIIII
            })
                .then((respuesta) => {
                res.status(200).json({
                    respuesta: "Rol borrado exitosamente",
                    "Filas afectadas": respuesta.rowCount
                });
            })
                .catch((miError) => {
                console.log("Error al borrar un rol: ", miError);
                res.status(400).json({ error: "Error al borrar un rol" });
            });
        });
    }
}
exports.default = ServicioRolBorrar; // Los servicios exportan clases
