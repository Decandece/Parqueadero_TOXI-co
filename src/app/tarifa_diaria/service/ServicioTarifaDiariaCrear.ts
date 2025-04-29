import { Response } from "express";

import TarifaDiaria from "../model/TarifaDiaria";
import pool from "../../../config/connection/dbConnection";
import { SQL_TARIFA_DIARIA } from "../repository/sql_tarifa_diaria";

class ServicioTarifaDiariaCrear {
    protected static async crearTarifaDiaria(tarifa: TarifaDiaria, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;

            const tarifaExistente = await consulta.oneOrNone(
                SQL_TARIFA_DIARIA.FIND_BY_ID,
                [tarifa.codParqueadero, tarifa.codTipoVehiculo]
            );

            if (!tarifaExistente) {
                caso = 2;
                objGrabado = await consulta.one(
                    SQL_TARIFA_DIARIA.ADD,
                    [
                        tarifa.codParqueadero,
                        tarifa.codTipoVehiculo,
                        tarifa.valorTarifaDiaria,
                    ]
                );
            }

            return { caso, objGrabado };
        })
        .then(({ caso, objGrabado }) => {
            switch (caso) {
                case 1:
                    res.status(400).json({ error: "La tarifa diaria ya existe para este parqueadero y tipo de vehículo" });
                    break;
                default:
                    res.status(200).json({ mensaje: "Tarifa diaria creada exitosamente", objGrabado });
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al crear una tarifa diaria: ", miError);
            res.status(400).json({ error: "Error al crear una tarifa diaria" });
        });
    }
}

export default ServicioTarifaDiariaCrear;
