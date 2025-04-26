import { Response } from "express";

import Ubicacion from "../model/Ubicacion";
import pool from "../../../config/connection/dbConnection";
import { SQL_UBICACION } from "../repository/sql_ubicacion";

class ServicioUbicacionCrear {
    protected static async crearUbicacion(ubicacion: Ubicacion, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const ubicaciones = await consulta.one(SQL_UBICACION.HOW_MANY, [ubicacion.nombreUbicacion]);

            if (ubicaciones.cantidad == 0) {
                //Crear ubicación.
                caso = 2;
                objGrabado = await consulta.one(
                    SQL_UBICACION.ADD, 
                    [   
                        ubicacion.codPadreUbicacion,
                        ubicacion.codExternoUbicacion,
                        ubicacion.nombreUbicacion
                    ]
                );
            }

            return { caso, objGrabado };
        })
        .then(({ caso, objGrabado}) => {
            switch (caso) {
                case 1:
                    res.status(400).json({error: "La ubicación ya existe"});
                    break;
                default:
                    res.status(200).json({mensaje: "Ubicación creada exitosamente", objGrabado});
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al crear una ubicación: ", miError);
            res.status(400).json({error: "Error al crear una ubicación"});
        });
    }
}

export default ServicioUbicacionCrear;