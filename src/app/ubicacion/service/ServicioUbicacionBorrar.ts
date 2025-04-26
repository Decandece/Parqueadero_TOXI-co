import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import Ubicacion from "../model/Ubicacion";
import { SQL_UBICACION } from "../repository/sql_ubicacion";

class ServicioUbicacionBorrar {
    protected static async borrarUbicacion(ubicacion: Ubicacion, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let respuesta = null;
            const ubicacionRev = await consulta.one(
                SQL_UBICACION.COUNT_PARQUEADEROS_BY_UBICACION_ID, 
                [ubicacion.codUbicacion]
            );
            const ubicacionRev2 = await consulta.one(
                SQL_UBICACION.COUNT_UBICACIONES_HIJAS, 
                [ubicacion.codUbicacion]
            );

            if(ubicacionRev.cantidad_parqueaderos_asignados == 0 && ubicacionRev2.cantidad_ubicaciones_hijas == 0) {
                caso = 2
                respuesta = await consulta.result(SQL_UBICACION.DELETE, [ubicacion.codUbicacion]);
            }
            
            return {caso, respuesta};
        })
        .then(({caso, respuesta}) => {
            if(caso == 2 && respuesta) {
                res.status(200).json({
                    respuesta: "Ubicación borrada exitosamente",
                    "Filas afectadas": respuesta.rowCount
                });
            }
            else {
                res.status(400).json({
                    error: "No se puede eliminar la ubicaciones porque tiene parqueaderos o ubicaciones hijas asignados."
                });
            }
        })
        .catch((miError) => {
            console.log("Error al borrar la ubicación: ", miError);
            res.status(400).json({message: "Error al borrar la ubicación"});
        });   
    }
}

export default ServicioUbicacionBorrar;