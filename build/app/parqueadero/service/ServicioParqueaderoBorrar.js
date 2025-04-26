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
const sql_parqueadero_1 = require("../repository/sql_parqueadero");
class ServicioParqueaderoBorrar {
    static borrarParqueadero(parqueadero, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                const parqueaderoRev = yield consulta.one(sql_parqueadero_1.SQL_PARQUEADERO.COUNT_PUESTOS_BY_ID, [parqueadero.codParqueadero]);
                let respuesta = null;
                if (parqueaderoRev.total_puestos == 0) {
                    caso = 2;
                    respuesta = yield consulta.result(sql_parqueadero_1.SQL_PARQUEADERO.DELETE, [parqueadero.codParqueadero]);
                }
                return { caso, respuesta };
            }))
                .then(({ caso, respuesta }) => {
                if (caso == 2 && respuesta) {
                    res.status(200).json({
                        respuesta: "Parqueadero borrado exitosamente",
                        "Filas afectadas": respuesta.rowCount
                    });
                }
                else {
                    res.status(400).json({
                        error: "No se puede eliminar el parqueadero porque tiene puestos asignados."
                    });
                }
            })
                .catch((miError) => {
                console.log("Error al borrar el parqueadero: ", miError);
                res.status(400).json({ error: "Error al borrar el parqueadero" });
            });
        });
    }
}
exports.default = ServicioParqueaderoBorrar;
