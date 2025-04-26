import { Request, Response } from "express";
import ServicioPuestoBorrar from "../service/ServicioPuestoBorrar";
import Puesto from "../model/Puesto";
import Parqueadero from "../../parqueadero/model/Parqueadero";
import Ubicacion from "../../ubicacion/model/Ubicacion";
import TipoVehiculo from "../../tipo-vehiculo/model/TipoVehiculo";

class ControladorPuestoBorrar extends ServicioPuestoBorrar {
    public borrarPuesto(req:Request, res:Response): void {
        const codigo = Number(req.params.codPuesto);
        const objPuesto = new Puesto(
            codigo, 
            new Parqueadero(0, new Ubicacion(0,0,"",""), "", "", ""), 
            new TipoVehiculo(0, ""), 
            ""
        );

        ServicioPuestoBorrar.borrarPuesto(objPuesto, res);
    }
}

const controladorPuestoBorrar = new ControladorPuestoBorrar();
export default controladorPuestoBorrar;