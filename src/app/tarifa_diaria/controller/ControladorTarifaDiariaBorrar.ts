import { Request, Response } from "express";

import ServicioTarifaDiariaBorrar from "../service/ServicioTarifaDiariaBorrar";
import TarifaDiaria from "../model/TarifaDiaria";

class ControladorTarifaDiariaBorrar extends ServicioTarifaDiariaBorrar {
    public borrarTarifaDiaria(req: Request, res: Response): void {
        const codParqueadero = Number(req.params.codParqueadero);
        const codTipoVehiculo = Number(req.params.codTipoVehiculo);

        const objTarifaDiaria = new TarifaDiaria(codParqueadero, codTipoVehiculo, 0);

        ServicioTarifaDiariaBorrar.borrarTarifaDiaria(objTarifaDiaria, res);
    }
}

const controladorTarifaDiariaBorrar = new ControladorTarifaDiariaBorrar();
export default controladorTarifaDiariaBorrar;
