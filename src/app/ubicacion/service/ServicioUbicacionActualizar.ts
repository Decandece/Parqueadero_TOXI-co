import { Response } from "express";

import Ubicacion from "../model/Ubicacion";
import pool from "../../../config/connection/dbConnection";
import { SQL_UBICACION } from "../repository/sql_ubicacion";

class ServicioUbicacionActualizar {
    protected static async actualizarUbicacion(ubicacion: Ubicacion, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objActualizado: any;

            console.log("Ubicacion: ", ubicacion.codUbicacion);
            console.log("Ubicacion: ", ubicacion.codPadreUbicacion);
            console.log("Ubicacion: ", ubicacion.codExternoUbicacion);
            console.log("Ubicacion: ", ubicacion.nombreUbicacion);
            
            const ubicacionExistente = await consulta.oneOrNone(SQL_UBICACION.FIND_BY_ID, [ubicacion.codUbicacion]);

            if (ubicacionExistente) {
                //Actualizar ubicación.
                caso = 2;
                objActualizado = await consulta.result(
                    SQL_UBICACION.UPDATE,
                    [   
                        ubicacion.codPadreUbicacion,
                        ubicacion.codExternoUbicacion,
                        ubicacion.nombreUbicacion,
                        ubicacion.codUbicacion,
                    ]
                );
            }

            return { caso, objActualizado };
        })
        .then(({ caso, objActualizado }) => {
            switch (caso) {
                case 1:
                    res.status(400).json({message: "La ubicacion no existe"});
                    break;
                default:
                    res.status(200).json({message: "Ubicación actualizada exitosamente", detalle: objActualizado.rowCount});
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al actualizar la ubicación: ", miError);
            res.status(400).json({message: "Error al actualizar la ubicación"});
        });
    }
}

export default ServicioUbicacionActualizar;