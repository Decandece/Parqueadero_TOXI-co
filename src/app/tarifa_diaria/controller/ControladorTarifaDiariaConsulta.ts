import { Request, Response } from "express";
import ServicioTarifaDiariaConsulta from "../service/ServicioTarifaDiariaConsulta";

class ControladorTarifaDiariaConsulta extends ServicioTarifaDiariaConsulta {
    public obtenerTodos(req: Request, res: Response): void {
        ServicioTarifaDiariaConsulta.obtenerTodos(res);
    }

    public obtenerPorIdHandler = (req: Request, res: Response): void => {
        const codParqueadero = parseInt(req.params.codParqueadero);
        const codTipoVehiculo = parseInt(req.params.codTipoVehiculo);
        ServicioTarifaDiariaConsulta.obtenerPorId(codParqueadero, codTipoVehiculo, res);
    }
}

const instanciaControladorTarifaDiariaConsulta = new ControladorTarifaDiariaConsulta();
export default instanciaControladorTarifaDiariaConsulta;