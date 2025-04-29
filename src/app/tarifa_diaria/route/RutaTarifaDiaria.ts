import { Router } from "express";

import instanciaControladorTarifaDiariaConsulta from "../controller/ControladorTarifaDiariaConsulta";
import controladorTarifaDiariaCrear from "../controller/ControladorTarifaDiariaCrear";
import controladorTarifaDiariaBorrar from "../controller/ControladorTarifaDiariaBorrar";
import controladorTarifaDiariaActualizar from "../controller/ControladorTarifaDiariaActualizar";
import validarDatos from "../../../middleware/ValidarDatos";
import {
  datosTarifaDiariaActualizar,
  datosTarifaDiariaBorrar,
  validarCrearTarifaDiaria,
} from "../../../config/domain/ValidarTarifaDiaria";

class RutaTarifasDiarias {
  public rutaTarifasDiariasApi: Router;

  constructor() {
    this.rutaTarifasDiariasApi = Router();

    this.rutaTarifasDiariasApi.get(
      "/getAll",
      instanciaControladorTarifaDiariaConsulta.obtenerTodos
    );
    this.rutaTarifasDiariasApi.post(
      "/add",
      validarCrearTarifaDiaria,
      validarDatos.ahora,
      controladorTarifaDiariaCrear.crearTarifaDiaria
    );
    this.rutaTarifasDiariasApi.delete(
      "/delete/:codParqueadero/:codTipoVehiculo",
      datosTarifaDiariaBorrar,
      validarDatos.ahora,
      controladorTarifaDiariaBorrar.borrarTarifaDiaria
    );
    this.rutaTarifasDiariasApi.put(
      "/update",
      datosTarifaDiariaActualizar,
      validarDatos.ahora,
      controladorTarifaDiariaActualizar.actualizarTarifaDiaria
    );

    this.rutaTarifasDiariasApi.get(
      "/get/:codParqueadero/:codTipoVehiculo",
      instanciaControladorTarifaDiariaConsulta.obtenerPorIdHandler
  );
  }
}

const rutaTarifasDiarias = new RutaTarifasDiarias();
export default rutaTarifasDiarias.rutaTarifasDiariasApi;
