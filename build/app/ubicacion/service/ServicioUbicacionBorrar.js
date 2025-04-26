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
const dbConnection_1 = __importDefault(require("../../../config/connection/dbConnection"));
const sql_ubicacion_1 = require("../repository/sql_ubicacion");
class ServicioUbicacionBorrar {
    static borrarUbicacion(ubicacion, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let respuesta = null;
                const ubicacionRev = yield consulta.one(sql_ubicacion_1.SQL_UBICACION.COUNT_PARQUEADEROS_BY_UBICACION_ID, [ubicacion.codUbicacion]);
                const ubicacionRev2 = yield consulta.one(sql_ubicacion_1.SQL_UBICACION.COUNT_UBICACIONES_HIJAS, [ubicacion.codUbicacion]);
                if (ubicacionRev.cantidad_parqueaderos_asignados == 0 && ubicacionRev2.cantidad_ubicaciones_hijas == 0) {
                    caso = 2;
                    respuesta = yield consulta.result(sql_ubicacion_1.SQL_UBICACION.DELETE, [ubicacion.codUbicacion]);
                }
                return { caso, respuesta };
            }))
                .then(({ caso, respuesta }) => {
                if (caso == 2 && respuesta) {
                    res.status(200).json({
                        respuesta: "Ubicación borrada exitosamente",
                        "Filas afectadas": respuesta.rowCount
                    });
                }
                else {
                    res.status(400).json({
                        error: "No se puede eliminar la ubicaciones porque tiene parqueaderos o ubicaciones hijas asignados."
                    });
                }
            })
                .catch((miError) => {
                console.log("Error al borrar la ubicación: ", miError);
                res.status(400).json({ message: "Error al borrar la ubicación" });
            });
        });
    }
}
exports.default = ServicioUbicacionBorrar;
