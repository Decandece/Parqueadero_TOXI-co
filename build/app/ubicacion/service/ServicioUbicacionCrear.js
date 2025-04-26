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
class ServicioUbicacionCrear {
    static crearUbicacion(ubicacion, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConnection_1.default
                .task((consulta) => __awaiter(this, void 0, void 0, function* () {
                let caso = 1;
                let objGrabado;
                const ubicaciones = yield consulta.one(sql_ubicacion_1.SQL_UBICACION.HOW_MANY, [ubicacion.nombreUbicacion]);
                if (ubicaciones.cantidad == 0) {
                    //Crear ubicación.
                    caso = 2;
                    objGrabado = yield consulta.one(sql_ubicacion_1.SQL_UBICACION.ADD, [
                        ubicacion.codPadreUbicacion,
                        ubicacion.codExternoUbicacion,
                        ubicacion.nombreUbicacion
                    ]);
                }
                return { caso, objGrabado };
            }))
                .then(({ caso, objGrabado }) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({ error: "La ubicación ya existe" });
                        break;
                    default:
                        res.status(200).json({ mensaje: "Ubicación creada exitosamente", objGrabado });
                        break;
                }
            })
                .catch((miError) => {
                console.log("Error al crear una ubicación: ", miError);
                res.status(400).json({ error: "Error al crear una ubicación" });
            });
        });
    }
}
exports.default = ServicioUbicacionCrear;
