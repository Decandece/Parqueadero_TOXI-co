import { Request, Response } from "express";
import ServicioPuestoActualizar from "../service/ServicioPuestoActualizar";
import Puesto from "../model/Puesto";

class ControladorPuestoActualizar extends ServicioPuestoActualizar {
    public actualizarPuesto(req: Request, res: Response): void {
        const objTemp = new Puesto(
            req.body.codPuesto,
            req.body.parqueadero,
            req.body.tipoVehiculo,
            req.body.detallePuesto
        );
        
        ServicioPuestoActualizar.actualizarPuesto(objTemp, res);
    }
}

const controladorPuestoActualizar = new ControladorPuestoActualizar();
export default controladorPuestoActualizar;