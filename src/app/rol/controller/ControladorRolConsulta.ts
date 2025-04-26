import ServicioRolConsulta from "../service/ServicioRolConsulta";
import { Request, Response } from "express";

class ControladorRolConsulta extends ServicioRolConsulta {

    public obtenerTodos(req: Request, res: Response): void {
        ServicioRolConsulta.obtenerTodos(res);
    }
}

const controladorRolConsulta = new ControladorRolConsulta();
export default controladorRolConsulta; //exporta una instancia