import { Response } from "express";

import Puesto from "../model/Puesto";
import pool from "../../../config/connection/dbConnection";
import { SQL_PUESTO } from "../repository/sql_puesto";

class ServicioPuestoBorrar {
    protected static async borrarPuesto(puesto: Puesto, res: Response): Promise<any> {
        await pool
        .task((consulta) => {
            return pool.result(SQL_PUESTO.DELETE, [puesto.codPuesto]);
        })
        .then((respuesta) => {
            res.status(200).json({
                respuesta: "Puesto borrado exitosamente",
                "Filas afectadas": respuesta.rowCount
            });
        })
        .catch((miError) => {
            console.log("Error al borrar el puesto: ", miError);
            res.status(400).json({error: "Error al borrar el puesto"});
        });
    }
}

export default ServicioPuestoBorrar;