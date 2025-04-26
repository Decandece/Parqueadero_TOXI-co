import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import Parqueadero from "../model/Parqueadero";
import { SQL_PARQUEADERO } from "../repository/sql_parqueadero";
import { SQL_UBICACION } from "../../ubicacion/repository/sql_ubicacion";

class ServicioParqueaderoActualizar {
    protected static async actualizarParqueadero(parqueadero: Parqueadero, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const verParqueadero = await consulta.oneOrNone(SQL_PARQUEADERO.FIND_BY_ID, [parqueadero.codParqueadero]);
            const ubicacion = await consulta.oneOrNone(SQL_UBICACION.FIND_BY_ID, [parqueadero.ubicacion.codUbicacion]);
        

            if (verParqueadero) {
                if(!ubicacion) {
                    caso = 2;
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
                
                objGrabado = await consulta.result(
                    SQL_PARQUEADERO.UPDATE,
                    [
                        parqueadero.ubicacion.codUbicacion,
                        parqueadero.nombreParqueadero,
                        parqueadero.direccionParqueadero,
                        parqueadero.telefonoParqueadero,
                        parqueadero.codParqueadero
                    ]
                );
                
            }

            return { caso, objGrabado };    
        })
        .then(({ caso, objGrabado }) => {
            switch (caso) {
                case 1:
                    res.status(400).json({message: "El parqueadero no existe"});
                    break;
                default:
                    res.status(200).json({message: "Parqueadero actualizado exitosamente", detalle: objGrabado.rowCount});
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al actualizar un parqueadero: ", miError);
            res.status(400).json({error: "Error al actualizar un parqueadero"});
        });
    }
}

export default ServicioParqueaderoActualizar;