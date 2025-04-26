import { Router } from "express";
import controladorSignIn from "../controller/ControladorSignIn";
import { validarLogin } from "../../../config/domain/ValidarLogin";
import validarDatos from "../../../middleware/ValidarDatos";

class RutaLogin {
  public rutaLoginApi: Router;

  constructor() {
    this.rutaLoginApi = Router();

    this.rutaLoginApi.post(
      "/sign-in",
      validarLogin,
      validarDatos.ahora,
      controladorSignIn.llamarSignIn
    );
  }
}

const rutaLogin = new RutaLogin();
export default rutaLogin.rutaLoginApi;
