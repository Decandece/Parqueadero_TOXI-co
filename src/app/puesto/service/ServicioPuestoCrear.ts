import { Response } from "express";
import Puesto from "../model/Puesto";
import pool from "../../../config/connection/dbConnection";
import { SQL_PARQUEADERO } from "../../parqueadero/repository/sql_parqueadero";
import { SQL_PUESTO } from "../repository/sql_puesto";
import { SQL_TIPO_VEHICULO } from "../../tipo-vehiculo/repository/sql_tipoVehiculo";

class ServicioPuestoCrear {
    protected static async crearPuesto(puesto: Puesto, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const parqueadero = await consulta.oneOrNone(SQL_PARQUEADERO.FIND_BY_ID, [puesto.parqueadero.codParqueadero]);
            const tipoVehiculo = await consulta.oneOrNone(SQL_TIPO_VEHICULO.FIND_BY_ID, [puesto.tipoVehiculo.codTipoVehiculo]);
            
            console.log("parqueadero: ", parqueadero);
            console.log("tipoVehiculo", tipoVehiculo);

            if(parqueadero && tipoVehiculo) {
                caso = 2;

                objGrabado = await consulta.one(
                    SQL_PUESTO.ADD,
                    [
                        puesto.parqueadero.codParqueadero,
                        puesto.tipoVehiculo.codTipoVehiculo,
                        puesto.detallePuesto
                    ]
                );
            }

            return {caso, objGrabado};
        })
        .then(({caso, objGrabado}) => {
            switch(caso) {
                case 1:
                    res.status(400).json({error: "El parqueadero no existe o el tipo de vehículo no existe"});
                    break;
                default:
                    res.status(200).json({mensaje: "Puesto creado exitosamente", objGrabado});
                    break;
            }
        })
        .catch((miError) => {
            console.log(miError);
            res.status(500).json({error: "Error en la base de datos"});
        });
    }
}

export default ServicioPuestoCrear;