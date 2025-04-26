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
const sql_tipoVehiculo_1 = require("../repository/sql_tipoVehiculo");
class ServicioTipoVehiculoConsulta {
    static obtenerTodos(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const misDatos = yield dbConnection_1.default.result(sql_tipoVehiculo_1.SQL_TIPO_VEHICULO.FIND_ALL);
                if (misDatos.rows.length === 0) {
                    return res.status(404).json({
                        respuesta: "No se encontraron tipos de vehículo",
                    });
                }
                res.status(200).json({
                    respuesta: "Consulta de tipos de vehiculos exitosa",
                    cantidad: misDatos.rows.length,
                    tiposVehiculos: misDatos.rows,
                });
            }
            catch (miError) {
                console.error(miError);
                res.status(500).json({
                    respuesta: "Error interno al consultar tipos de vehículo",
                });
            }
        });
    }
    static obtenerPorId(codTipoVehiculo, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const misDatos = yield dbConnection_1.default.result(sql_tipoVehiculo_1.SQL_TIPO_VEHICULO.FIND_BY_ID, [
                    codTipoVehiculo,
                ]);
                if (misDatos.rows.length === 0) {
                    return res.status(404).json({
                        respuesta: "No se encontró el tipo de vehículo",
                    });
                }
                res.status(200).json({
                    respuesta: "Consulta de tipo de vehículo exitosa",
                    tipoVehiculo: misDatos.rows[0],
                });
            }
            catch (miError) {
                console.error(miError);
                res.status(500).json({
                    respuesta: "Error interno al consultar el tipo de vehículo",
                });
            }
        });
    }
}
exports.default = ServicioTipoVehiculoConsulta;
