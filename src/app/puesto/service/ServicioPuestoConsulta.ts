import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_PUESTO } from "../repository/sql_puesto";

class ServicioPuestoConsulta {
    protected static async obtenerTodos(res: Response): Promise<any> {
        await pool
        .result(SQL_PUESTO.FIND_ALL)
        .then((misDatos) => {
            res.status(200).json(misDatos.rows);
        })
        .catch(( miError ) => {
            console.log("Error al obtener todos los puestos: ", miError);
            res.status(400).json({error: "Error al obtener todos los puestos"});
        });
    }
}

export default ServicioPuestoConsulta;