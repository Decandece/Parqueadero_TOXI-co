import { Response } from "express";

import pool from "../../../config/connection/dbConnection";
import TarifaDiaria from "../model/TarifaDiaria";
import { SQL_TARIFA_DIARIA } from "../repository/sql_tarifa_diaria";

class ServicioTarifaDiariaBorrar {
    protected static async borrarTarifaDiaria(tarifa: TarifaDiaria, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            const tarifaRev = await consulta.oneOrNone(
                SQL_TARIFA_DIARIA.FIND_BY_ID, 
                [tarifa.codParqueadero, tarifa.codTipoVehiculo]
            );
            let respuesta = null;

            if (tarifaRev) {
                caso = 2;
                respuesta = await consulta.result(
                    SQL_TARIFA_DIARIA.DELETE,
                    [tarifa.codParqueadero, tarifa.codTipoVehiculo]
                );
            }

            return { caso, respuesta };
        })
        .then(({ caso, respuesta }) => { 
            if (caso == 2 && respuesta) {
                res.status(200).json({
                    respuesta: "Tarifa diaria borrada exitosamente",
                    "Filas afectadas": respuesta.rowCount
                });
            } else {
                res.status(400).json({
                    error: "No se puede eliminar la tarifa diaria porque no existe."
                });
            }
        })
        .catch((miError) => {
            console.log("Error al borrar la tarifa diaria: ", miError);
            res.status(400).json({error: "Error al borrar la tarifa diaria"});
        });
    }
}

export default ServicioTarifaDiariaBorrar;
