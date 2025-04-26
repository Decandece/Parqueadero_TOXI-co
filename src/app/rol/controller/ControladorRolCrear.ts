import { Request, Response } from "express";

import Rol from "../model/Rol";
import ServicioRolCrear from "../service/ServicioRolCrear";

class ControladorRolCrear extends ServicioRolCrear {

    public llamarCrearRol(req: Request, res: Response): void {
        const objTemp = new Rol(0, "");
        
        objTemp.nombreRol = req.body.nombreRol;
        ServicioRolCrear.crearRol(objTemp, res);
    }

}

const controladorRolCrear = new ControladorRolCrear();
export default controladorRolCrear;