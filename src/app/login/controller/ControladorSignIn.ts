import { Request, Response } from "express";
import Acceso from "../model/Acceso";
import ServicioSignIn from "../service/ServicioSignIn";

class ControladorSignIn extends ServicioSignIn {
    public llamarSignIn(req: Request, res:Response) {
        console.log("ControladorSignIn: ", req.body);
        const objTemp = new Acceso(0, "", "", "");


        objTemp.correoAcceso = req.body.correoAcceso;
        objTemp.claveAcceso = req.body.claveAcceso;

        ServicioSignIn.signIn(objTemp, res);
    }
}

const controladorSignIn = new ControladorSignIn();
export default controladorSignIn;