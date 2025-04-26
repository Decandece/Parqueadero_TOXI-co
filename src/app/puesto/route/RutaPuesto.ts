import { Router } from "express";
import controladorPuestoConsulta from "../controller/ControladorPuestoConsulta";
import {
  datosPuestoActualizar,
  datosPuestoBorrar,
  validarCrearPuesto,
} from "../../../config/domain/ValidarPuesto";
import validarDatos from "../../../middleware/ValidarDatos";
import controladorPuestoCrear from "../controller/ControladorPuestoCrear";
import controladorPuestoBorrar from "../controller/ControladorPuestoBorrar";
import controladorPuestoActualizar from "../controller/ControladorPuestoActualizar";

class RutaPuesto {
  public rutaPuestoApi: Router;

  constructor() {
    this.rutaPuestoApi = Router();

    this.rutaPuestoApi.get("/getAll", controladorPuestoConsulta.obtenerTodos);
    this.rutaPuestoApi.post(
      "/add",
      validarCrearPuesto,
      validarDatos.ahora,
      controladorPuestoCrear.crearPuesto
    );
    this.rutaPuestoApi.delete(
      "/delete/:codPuesto",
      datosPuestoBorrar,
      validarDatos.ahora,
      controladorPuestoBorrar.borrarPuesto
    );
    this.rutaPuestoApi.put(
      "/update",
      datosPuestoActualizar,
      validarDatos.ahora,
      controladorPuestoActualizar.actualizarPuesto
    );
  }
}

const rutaPuesto = new RutaPuesto();
export default rutaPuesto.rutaPuestoApi;
