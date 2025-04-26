import { Response } from "express";

import Rol from "../model/Rol";
import { SQL_ROL } from "../repository/sql_rol";
import pool from "../../../config/connection/dbConnection";

class ServicioRolBorrar {
  

  protected static async borrar(rol: Rol, res: Response): Promise<any> {
    await pool
    .task( (consulta) => {
        return pool.result(SQL_ROL.DELETE, [rol.codRol]); //Ojo con el RESULT UIIII
    })
    .then((respuesta) => {
        res.status(200).json({
            respuesta: "Rol borrado exitosamente", 
            "Filas afectadas": respuesta.rowCount
        }); 
    })
    .catch((miError) => {
        console.log("Error al borrar un rol: ", miError);
        res.status(400).json({error: "Error al borrar un rol"});
    });
  }
}

export default ServicioRolBorrar; // Los servicios exportan clases