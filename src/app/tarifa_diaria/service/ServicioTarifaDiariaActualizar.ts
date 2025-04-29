import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import TarifaDiaria from "../model/TarifaDiaria";
import { SQL_TARIFA_DIARIA } from "../repository/sql_tarifa_diaria";

class ServicioTarifaDiariaActualizar {
    protected static async actualizarTarifaDiaria(tarifaDiaria: TarifaDiaria, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let objGrabado: any;
    
            const verTarifa = await consulta.oneOrNone(
                SQL_TARIFA_DIARIA.FIND_BY_ID,
                [tarifaDiaria.codParqueadero, tarifaDiaria.codTipoVehiculo]
            );
    
            if (verTarifa) {
                caso = 2; // Cambiamos el caso a 2 cuando existe la tarifa
                objGrabado = await consulta.result(
                    SQL_TARIFA_DIARIA.UPDATE,
                    [
                        tarifaDiaria.valorTarifaDiaria,
                        tarifaDiaria.codParqueadero,
                        tarifaDiaria.codTipoVehiculo
                    ]
                );
            }
    
            return { caso, objGrabado };
        })
        .then(({ caso, objGrabado }) => {
            switch (caso) {
                case 1:
                    res.status(404).json({ message: "La tarifa diaria no existe" }); // Cambiado a 404 para "no encontrado"
                    break;
                case 2:
                    res.status(200).json({ 
                        message: "Tarifa diaria actualizada exitosamente", 
                        detalle: objGrabado.rowCount 
                    });
                    break;
            }
        })
        .catch((miError) => {
            console.error("Error al actualizar la tarifa diaria: ", miError);
            res.status(400).json({ error: "Error al actualizar la tarifa diaria" });
        });
    }
}

export default ServicioTarifaDiariaActualizar;
