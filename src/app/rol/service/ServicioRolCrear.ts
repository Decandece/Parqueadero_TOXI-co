import { Response } from "express";

import Rol from "../model/Rol";
import pool from "../../../config/connection/dbConnection";
import { SQL_ROL } from "../repository/sql_rol";

class ServicioRolCrear {

    protected static async crearRol(rol: Rol, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const roles = await consulta.one(SQL_ROL.HOW_MANY, [rol.nombreRol]);

            if (roles.cantidad == 0) {
                //Crear rol.
                caso = 2;
                objGrabado = await consulta.one(SQL_ROL.ADD, [rol.nombreRol]);
            }

            return { caso, objGrabado };
        })
        .then(({ caso, objGrabado}) => {
            switch (caso) {
                case 1:
                    res.status(400).json({error: "El rol ya existe"});
                    break;
                default:
                    res.status(200).json({mensaje: "Rol creado exitosamente", objGrabado});
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al crear un rol: ", miError);
            res.status(400).json({error: "Error al crear un rol"});
        });
    }
}

export default ServicioRolCrear;