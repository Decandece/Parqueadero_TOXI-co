import { Router } from "express";
import controladorRolConsulta from "../controller/ControladorRolConsulta";
import controladorRolCrear from "../controller/ControladorRolCrear";
import validarDatos from "../../../middleware/ValidarDatos";
import {
  datosRolActualizar,
  datosRolBorrar,
  validarCrearRol,
} from "../../../config/domain/ValidarRol";
import controladorRolBorrar from "../controller/ControladorRolBorrar";
import controladorRolActualizar from "../controller/ControladorRolActualizar";

class RutaRol {
  public rutaRolApi: Router;

  constructor() {
    this.rutaRolApi = Router();

    this.rutaRolApi.get("/getAll", controladorRolConsulta.obtenerTodos);
    this.rutaRolApi.post(
      "/add",
      validarCrearRol,
      validarDatos.ahora,
      controladorRolCrear.llamarCrearRol
    );
    this.rutaRolApi.delete(
      "/delete/:codRol",
      datosRolBorrar,
      validarDatos.ahora,
      controladorRolBorrar.llamarBorrarRol
    ); //hacer el validar
    this.rutaRolApi.put(
      "/update",
      datosRolActualizar,
      validarDatos.ahora,
      controladorRolActualizar.llamarActualizar
    );
  }
}

const rutaRol = new RutaRol();
export default rutaRol.rutaRolApi; // exporta una propiedad de una instancia
