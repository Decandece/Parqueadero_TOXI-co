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
const sql_ubicacion_1 = require("../../ubicacion/repository/sql_ubicacion");
class ServicioParqueaderoCrear {
    static crearParqueadero(parqueadero, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objGrabado;
                const parqueaderos = yield consulta.one(sql_parqueadero_1.SQL_PARQUEADERO.HOW_MANY, [parqueadero.nombreParqueadero]);
                const ubicacion = yield consulta.oneOrNone(sql_ubicacion_1.SQL_UBICACION.FIND_BY_ID, [parqueadero.ubicacion.codUbicacion]);
                if (parqueaderos.cantidad == 0) {
                    if (!ubicacion) {
                        //Crear ubicacion.
                        let codigo = yield consulta.one(sql_ubicacion_1.SQL_UBICACION.ADD, [
                            parqueadero.ubicacion.codPadreUbicacion,
                            parqueadero.ubicacion.codExternoUbicacion,
                            parqueadero.ubicacion.nombreUbicacion
                        ]);
                        parqueadero.ubicacion.codUbicacion = codigo.codUbicacion;
                    }
                    caso = 2;
                    //Crear parqueadero.
                    objGrabado = yield consulta.one(sql_parqueadero_1.SQL_PARQUEADERO.ADD, [
                        parqueadero.ubicacion.codUbicacion,
                        parqueadero.nombreParqueadero,
                        parqueadero.direccionParqueadero,
                        parqueadero.telefonoParqueadero
                    ]);
                }
                return { caso, objGrabado };
            }))
                .then(({ caso, objGrabado }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({ error: "El parqueadero ya existe" });
                        break;
                    default:
                        res.status(200).json({ mensaje: "Parqueadero creado exitosamente", objGrabado });
                        break;
                }
            })
                .catch((miError) => {
                console.log("Error al crear un parqueadero: ", miError);
                res.status(400).json({ error: "Error al crear un parqueadero" });
            });
        });
    }
}
exports.default = ServicioParqueaderoCrear;
