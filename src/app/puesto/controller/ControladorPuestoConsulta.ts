import { Request, Response } from "express";

import ServicioPuestoConsulta from "../service/ServicioPuestoConsulta";

class ControladorPuestoConsulta extends ServicioPuestoConsulta {
    public obtenerTodos(req: Request, res: Response): void {
        ServicioPuestoConsulta.obtenerTodos(res);
    }
}

const controladorPuestoConsulta = new ControladorPuestoConsulta();
export default controladorPuestoConsulta;