import { Request, Response } from "express";
import ServicioRolActualizar from "../service/ServicioRolActualizar";
import Rol from "../model/Rol";

class ControladorRolActualizar extends ServicioRolActualizar {

    public llamarActualizar(req: Request, res: Response): void {
        const rol = new Rol(req.body.codRol, req.body.nombreRol);

        ServicioRolActualizar.actualizarRol(rol, res);
    }

}

const controladorRolActualizar = new ControladorRolActualizar();
export default controladorRolActualizar;