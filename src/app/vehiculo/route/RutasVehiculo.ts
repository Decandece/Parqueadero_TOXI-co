import { Router } from "express";
import controladorVehiculoCrear from "../controller/ControladorVehiculoCrear";
import controladorVehiculoActualizar from "../controller/ControladorVehiculoActualizar";
import controladorVehiculoBorrar from "../controller/ControladorVehiculoBorrar";
import controladorVehiculoConsulta from "../controller/ControladorVehiculoConsulta";
import {
  datosVehiculoActualizar,
  datosVehiculoBorrar,
  datosVehiculoCrear,
  datosVehiculoGet,
  datosVehiculoGetPlaca,
  datosVehiculoGetTipo,
  datosVehiculoGetUsuario
} from "../../../config/domain/ValidarVehiculo";
import validarDatos from "../../../middleware/ValidarDatos";

class RutasVehiculo {
  public rutasVehiculoAPI: Router;

  constructor() {
    this.rutasVehiculoAPI = Router();
    this.configurarRutas();
  }

  public configurarRutas(): void {
    // Ruta para obtener todos los vehículos
    this.rutasVehiculoAPI.get(
      "/getall",
      controladorVehiculoConsulta.llamarObtenerTodos
    );

    // Ruta para obtener vehículo por ID
    this.rutasVehiculoAPI.get(
      "/:codVehiculo",
      datosVehiculoGet,
      validarDatos.ahora,
      controladorVehiculoConsulta.llamarObtenerPorId
    );

    // Ruta para obtener vehículo por placa
    this.rutasVehiculoAPI.get(
      "/placa/:placa",
      datosVehiculoGetPlaca,
      validarDatos.ahora,
      controladorVehiculoConsulta.llamarObtenerPorPlaca
    );

    // Ruta para obtener vehículos por usuario
    this.rutasVehiculoAPI.get(
      "/usuario/:codUsuario",
      datosVehiculoGetUsuario,
      validarDatos.ahora,
      controladorVehiculoConsulta.llamarObtenerPorUsuario
    );

    // Ruta para obtener vehículos por tipo
    this.rutasVehiculoAPI.get(
      "/tipo/:codTipoVehiculo",
      datosVehiculoGetTipo,
      validarDatos.ahora,
      controladorVehiculoConsulta.llamarObtenerPorTipo
    );

    // Ruta para crear un vehículo
    this.rutasVehiculoAPI.post(
      "/add",
      datosVehiculoCrear,
      validarDatos.ahora,
      controladorVehiculoCrear.llamarGrabarVehiculo
    );

    // Ruta para actualizar un vehículo
    this.rutasVehiculoAPI.put(
      "/update",
      datosVehiculoActualizar,
      validarDatos.ahora,
      controladorVehiculoActualizar.llamarActualizar
    );

    // Ruta para eliminar un vehículo
    this.rutasVehiculoAPI.delete(
      "/delete/:codVehiculo",
      datosVehiculoBorrar,
      validarDatos.ahora,
      controladorVehiculoBorrar.llamarBorrar
    );
  }
}

const rutasVehiculo = new RutasVehiculo();
export default rutasVehiculo.rutasVehiculoAPI;
