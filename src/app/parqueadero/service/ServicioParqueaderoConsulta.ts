import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_PARQUEADERO } from "../repository/sql_parqueadero";

class ServicioParqueaderoConsulta {
    protected static async obtenerTodos(res: Response): Promise<any> {
        await pool
        .result(SQL_PARQUEADERO.FIND_ALL)
        .then((misDatos) => {
            res.status(200).json(misDatos.rows);
        })
        .catch(( miError ) => {
            console.log("Error al obtener todos los parqueaderos: ", miError);
            res.status(400).json({error: "Error al obtener todos los parqueaderos"});
        });
    }
}

export default ServicioParqueaderoConsulta;
