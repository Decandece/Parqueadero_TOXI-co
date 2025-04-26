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
class ServicioUbicacionActualizar {
    static actualizarUbicacion(ubicacion, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objActualizado;
                console.log("Ubicacion: ", ubicacion.codUbicacion);
                console.log("Ubicacion: ", ubicacion.codPadreUbicacion);
                console.log("Ubicacion: ", ubicacion.codExternoUbicacion);
                console.log("Ubicacion: ", ubicacion.nombreUbicacion);
                const ubicacionExistente = yield consulta.oneOrNone(sql_ubicacion_1.SQL_UBICACION.FIND_BY_ID, [ubicacion.codUbicacion]);
                if (ubicacionExistente) {
                    //Actualizar ubicación.
                    caso = 2;
                    objActualizado = yield consulta.result(sql_ubicacion_1.SQL_UBICACION.UPDATE, [
                        ubicacion.codPadreUbicacion,
                        ubicacion.codExternoUbicacion,
                        ubicacion.nombreUbicacion,
                        ubicacion.codUbicacion,
                    ]);
                }
                return { caso, objActualizado };
            }))
                .then(({ caso, objActualizado }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({ message: "La ubicacion no existe" });
                        break;
                    default:
                        res.status(200).json({ message: "Ubicación actualizada exitosamente", detalle: objActualizado.rowCount });
                        break;
                }
            })
                .catch((miError) => {
                console.log("Error al actualizar la ubicación: ", miError);
                res.status(400).json({ message: "Error al actualizar la ubicación" });
            });
        });
    }
}
exports.default = ServicioUbicacionActualizar;
