import { Request, Response } from "express";

import ServicioTarifaDiariaCrear from "../service/ServicioTarifaDiariaCrear";
import TarifaDiaria from "../model/TarifaDiaria";

class ControladorTarifaDiariaCrear extends ServicioTarifaDiariaCrear {
    public crearTarifaDiaria(req: Request, res: Response): void {
        const objTemp = new TarifaDiaria(
            req.body.codParqueadero,
            req.body.codTipoVehiculo,
            req.body.valorTarifaDiaria
        );
        
        ServicioTarifaDiariaCrear.crearTarifaDiaria(objTemp, res);
    }
}

const controladorTarifaDiariaCrear = new ControladorTarifaDiariaCrear();
export default controladorTarifaDiariaCrear;
