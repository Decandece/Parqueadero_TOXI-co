import { Response } from "express";

import Parqueadero from "../model/Parqueadero";
import pool from "../../../config/connection/dbConnection";
import { SQL_PARQUEADERO } from "../repository/sql_parqueadero";
import { SQL_UBICACION } from "../../ubicacion/repository/sql_ubicacion";

class ServicioParqueaderoCrear {
    protected static async crearParqueadero(parqueadero: Parqueadero, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;
            
            const parqueaderos = await consulta.one(SQL_PARQUEADERO.HOW_MANY, [parqueadero.nombreParqueadero]);
            const ubicacion = await consulta.oneOrNone(SQL_UBICACION.FIND_BY_ID, [parqueadero.ubicacion.codUbicacion]);

            if (parqueaderos.cantidad == 0) {
                if(!ubicacion) {
                    //Crear ubicacion.
                    
                    let codigo: any = await consulta.one(
                        SQL_UBICACION.ADD, 
                        [   
                            parqueadero.ubicacion.codPadreUbicacion,
                            parqueadero.ubicacion.codExternoUbicacion,
                            parqueadero.ubicacion.nombreUbicacion
                        ]
                    );

                    parqueadero.ubicacion.codUbicacion = codigo.codUbicacion;
                }
                
                caso = 2;
                //Crear parqueadero.
                objGrabado = await consulta.one(
                    SQL_PARQUEADERO.ADD, 
                    [
                        parqueadero.ubicacion.codUbicacion, 
                        parqueadero.nombreParqueadero, 
                        parqueadero.direccionParqueadero, 
                        parqueadero.telefonoParqueadero
                    ]
                );
                
            }

            return { caso, objGrabado };
        })
        .then(({ caso, objGrabado }) => {
            switch (caso) {
                case 1:
                    res.status(400).json({error: "El parqueadero ya existe"});
                    break;
                default:
                    res.status(200).json({mensaje: "Parqueadero creado exitosamente", objGrabado});
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al crear un parqueadero: ", miError);
            res.status(400).json({error: "Error al crear un parqueadero"});
        });
    }
}

export default ServicioParqueaderoCrear;
