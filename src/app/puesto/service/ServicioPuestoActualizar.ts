import { Response } from "express";
import Puesto from "../model/Puesto";
import pool from "../../../config/connection/dbConnection";
import { SQL_PUESTO } from "../repository/sql_puesto";
import { SQL_PARQUEADERO } from "../../parqueadero/repository/sql_parqueadero";
import { SQL_TIPO_VEHICULO } from "../../tipo-vehiculo/repository/sql_tipoVehiculo";

class ServicioPuestoActualizar {
    protected static async actualizarPuesto(puesto: Puesto, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const verPuesto = await consulta.oneOrNone(SQL_PUESTO.FIND_BY_ID, [puesto.codPuesto]);
            const parqueadero = await consulta.oneOrNone(SQL_PARQUEADERO.FIND_BY_ID, [puesto.parqueadero.codParqueadero]);
            const tipoVehiculo = await consulta.oneOrNone(SQL_TIPO_VEHICULO.FIND_BY_ID, [puesto.tipoVehiculo.codTipoVehiculo]);

            if(verPuesto && parqueadero && tipoVehiculo) {
                caso = 2;

                objGrabado = await consulta.result(
                    SQL_PUESTO.UPDATE,
                    [
                        puesto.parqueadero.codParqueadero,
                        puesto.tipoVehiculo.codTipoVehiculo,
                        puesto.detallePuesto,
                        puesto.codPuesto
                    ]
                );
            }

            return {caso, objGrabado};
        })
        .then(({caso, objGrabado}) => {
            switch(caso) {
                case 1:
                    res.status(400).json({error: "El puesto no existe o el parqueadero no existe o el tipo de vehículo no existe"});
                    break;
                default:
                    res.status(200).json({mensaje: "Puesto actualizado exitosamente", detalle: objGrabado.rowCount});
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al actualizar un puesto: ", miError);
            res.status(500).json({error: "Error en la base de datos"});
        });
    }
}

export default ServicioPuestoActualizar;