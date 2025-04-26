import { Response } from "express";

import pool from "../../../config/connection/dbConnection";
import Parqueadero from "../model/Parqueadero";
import { SQL_PARQUEADERO } from "../repository/sql_parqueadero";

class ServicioParqueaderoBorrar {
    protected static async borrarParqueadero(parqueadero: Parqueadero, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            const parqueaderoRev = await consulta.one(SQL_PARQUEADERO.COUNT_PUESTOS_BY_ID, [parqueadero.codParqueadero]);
            let respuesta = null;

            if(parqueaderoRev.total_puestos == 0) {
                caso = 2;
                respuesta = await consulta.result(SQL_PARQUEADERO.DELETE, [parqueadero.codParqueadero]);
            }

            return {caso, respuesta }
        })
        .then(({ caso, respuesta }) => { 
            if (caso == 2 && respuesta) {
                res.status(200).json({
                    respuesta: "Parqueadero borrado exitosamente",
                    "Filas afectadas": respuesta.rowCount
                });
            } else {
                res.status(400).json({
                    error: "No se puede eliminar el parqueadero porque tiene puestos asignados."
                });
            }
        })
        .catch((miError) => {
            console.log("Error al borrar el parqueadero: ", miError);
            res.status(400).json({error: "Error al borrar el parqueadero"});
        });
    }
}

export default ServicioParqueaderoBorrar;