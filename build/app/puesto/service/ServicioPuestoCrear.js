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
const sql_parqueadero_1 = require("../../parqueadero/repository/sql_parqueadero");
const sql_puesto_1 = require("../repository/sql_puesto");
const sql_tipoVehiculo_1 = require("../../tipo-vehiculo/repository/sql_tipoVehiculo");
class ServicioPuestoCrear {
    static crearPuesto(puesto, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objGrabado;
                const parqueadero = yield consulta.oneOrNone(sql_parqueadero_1.SQL_PARQUEADERO.FIND_BY_ID, [puesto.parqueadero.codParqueadero]);
                const tipoVehiculo = yield consulta.oneOrNone(sql_tipoVehiculo_1.SQL_TIPO_VEHICULO.FIND_BY_ID, [puesto.tipoVehiculo.codTipoVehiculo]);
                console.log("parqueadero: ", parqueadero);
                console.log("tipoVehiculo", tipoVehiculo);
                if (parqueadero && tipoVehiculo) {
                    caso = 2;
                    objGrabado = yield consulta.one(sql_puesto_1.SQL_PUESTO.ADD, [
                        puesto.parqueadero.codParqueadero,
                        puesto.tipoVehiculo.codTipoVehiculo,
                        puesto.detallePuesto
                    ]);
                }
                return { caso, objGrabado };
            }))
                .then(({ caso, objGrabado }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({ error: "El parqueadero no existe o el tipo de vehículo no existe" });
                        break;
                    default:
                        res.status(200).json({ mensaje: "Puesto creado exitosamente", objGrabado });
                        break;
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(500).json({ error: "Error en la base de datos" });
            });
        });
    }
}
exports.default = ServicioPuestoCrear;
