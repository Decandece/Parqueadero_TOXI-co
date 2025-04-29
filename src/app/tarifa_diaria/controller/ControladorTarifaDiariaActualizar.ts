import { Request, Response } from "express";
import ServicioTarifaDiariaActualizar from "../service/ServicioTarifaDiariaActualizar";
import TarifaDiaria from "../model/TarifaDiaria";

class ControladorTarifaDiariaActualizar extends ServicioTarifaDiariaActualizar {
    public actualizarTarifaDiaria(req: Request, res: Response) {
        const objTemp = new TarifaDiaria(
            req.body.codParqueadero,
            req.body.codTipoVehiculo,
            req.body.valorTarifaDiaria
        );

        ServicioTarifaDiariaActualizar.actualizarTarifaDiaria(objTemp, res);
    }
}

const controladorTarifaDiariaActualizar = new ControladorTarifaDiariaActualizar();
export default controladorTarifaDiariaActualizar;