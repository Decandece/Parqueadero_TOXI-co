import { Request, Response } from "express";

import ServicioUbicacionBorrar from "../service/ServicioUbicacionBorrar";
import Ubicacion from "../model/Ubicacion";

class ControladorUbicacionBorrar extends ServicioUbicacionBorrar {
    public llamarBorrarUbicacion(req: Request, res: Response): void {
        const codigo = Number(req.params.codUbicacion);
        const objUbicacion = new Ubicacion(codigo, 0, "", "");

        ServicioUbicacionBorrar.borrarUbicacion(objUbicacion, res);
    }
}

const controladorUbicacionBorrar = new ControladorUbicacionBorrar();
export default controladorUbicacionBorrar; //exporta una instancia