import { Request, Response } from "express";
import ServicioPuestoCrear from "../service/ServicioPuestoCrear";
import Puesto from "../model/Puesto";

class ControladorPuestoCrear extends ServicioPuestoCrear {
    public crearPuesto(req: Request, res: Response): void {
        const objTemp = new Puesto(
            0,
            req.body.parqueadero,
            req.body.tipoVehiculo,
            req.body.detallePuesto
        );

        ServicioPuestoCrear.crearPuesto(objTemp, res);
    }
}

const controladorPuestoCrear = new ControladorPuestoCrear();
export default controladorPuestoCrear;