import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TARIFA_DIARIA } from "../repository/sql_tarifa_diaria";

class ServicioTarifaDiariaConsulta {
    protected static async obtenerTodos(res: Response): Promise<any> {
        await pool
        .result(SQL_TARIFA_DIARIA.FIND_ALL)
        .then((misDatos) => {
            res.status(200).json(misDatos.rows);
        })
        .catch((miError) => {
            console.log("Error al obtener todas las tarifas diarias: ", miError);
            res.status(400).json({ error: "Error al obtener todas las tarifas diarias" });
        });
    }

    protected static async obtenerPorId(codParqueadero: number, codTipoVehiculo: number, res: Response): Promise<any> {
        await pool
        .oneOrNone(SQL_TARIFA_DIARIA.FIND_BY_ID, [codParqueadero, codTipoVehiculo])
        .then((resultado) => {
            if (resultado) {
                res.status(200).json(resultado);
            } else {
                res.status(404).json({ 
                    respuesta: "No se encontró la tarifa diaria para el parqueadero y tipo de vehículo especificados" 
                });
            }
        })
        .catch((miError) => {
            console.log("Error al obtener la tarifa diaria: ", miError);
            res.status(400).json({ error: "Error al obtener la tarifa diaria" });
        });
    }
}


export default ServicioTarifaDiariaConsulta;
