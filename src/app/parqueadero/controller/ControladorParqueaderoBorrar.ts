import { Request, Response } from "express";

import ServicioParqueaderoBorrar from "../service/ServicioParqueaderoBorrar";
import Parqueadero from "../model/Parqueadero";
import Ubicacion from "../../ubicacion/model/Ubicacion";

class ControladorParqueaderoBorrar extends ServicioParqueaderoBorrar {
    public borrarParqueadero(req: Request, res: Response): void {
        const codigo = Number(req.params.codParqueadero);
        const objParqueadero = new Parqueadero(codigo, new Ubicacion(0, 0, "", ""), "", "", "");

        ServicioParqueaderoBorrar.borrarParqueadero(objParqueadero, res);
    }
}

const controladorParqueaderoBorrar = new ControladorParqueaderoBorrar();
export default controladorParqueaderoBorrar;