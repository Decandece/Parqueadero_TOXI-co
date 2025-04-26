import { Response } from "express";

import Rol from "../model/Rol";
import pool from "../../../config/connection/dbConnection";
import { SQL_ROL } from "../repository/sql_rol";


class ServicioRolActualizar {
    protected static async actualizarRol(rol: Rol, res:Response): Promise<any> {
        await pool
        .task(async (consulta)=>{
            let caso = 1;
            let objActualizado: any;

            const roles = await consulta.one(SQL_ROL.HOW_MANY, [rol.nombreRol]);

            if(roles.cantidad == 0){
                
                caso = 2;
                objActualizado = await consulta.result(SQL_ROL.UPDATE, [rol.nombreRol, rol.codRol]);
            }

            return {caso, objActualizado};
        })
        .then(({caso, objActualizado})=>{
            switch(caso){
                case 1:
                    res.status(400).json({message: "El rol ya existe"});
                    break;
                default:
                    res.status(200).json({
                        message: "Rol actualizado exitosamente", 
                        detalle: objActualizado.rowCount
                    });
                    break;
            }

        })
        .catch((miError)=>{
            console.log("Error al actualizar el rol: ", miError);
            res.status(400).json({message: "Error al actualizar el rol"});
        });
    }
}

export default ServicioRolActualizar;