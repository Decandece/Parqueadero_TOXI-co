import { Router } from "express";
import controladorUsuarioCrear from "../controller/ControladorUsuarioCrear";
import controladorUsuarioActualizar from "../controller/ControladorUsuarioActualizar";
import controladorUsuarioBorrar from "../controller/ControladorUsuarioBorrar";
import controladorUsuarioConsulta from "../controller/ControladorUsuarioConsulta";
import {
  datosUserCreate,
  datosUserDelete,
  datosUserGet,
  datosUserUpdate,
} from "../../../config/domain/ValidarUsuario";
import validarDatos from "../../../middleware/ValidarDatos";

class RutasUsuario {
  public rutasUsuarioAPI: Router;

  constructor() {
    this.rutasUsuarioAPI = Router();
    this.configurarRutas();
  }

  public configurarRutas(): void {
    // Ruta para obtener todos los usuarios
    this.rutasUsuarioAPI.get(
      "/getall",
      controladorUsuarioConsulta.llamarObtenerTodos
    );

    // Ruta para obtener usuario por ID
    this.rutasUsuarioAPI.get(
      "/:codUsuario",
      validarDatos.ahora,
      controladorUsuarioConsulta.llamarObtenerPorId
    );

    // Ruta para obtener usuarios por rol
    this.rutasUsuarioAPI.get(
      "/rol/:codRol",
      datosUserGet,
      validarDatos.ahora,
      controladorUsuarioConsulta.llamarObtenerPorRol
    );

    // Ruta para crear un usuario
    this.rutasUsuarioAPI.post(
      "/add",
      datosUserCreate,
      validarDatos.ahora,
      controladorUsuarioCrear.llamarGrabarUsuario
    );

    // Ruta para actualizar un usuario
    this.rutasUsuarioAPI.put(
      "/update",
      datosUserUpdate,
      validarDatos.ahora,
      controladorUsuarioActualizar.llamarActualizar
    );

    // Ruta para eliminar un usuario
    this.rutasUsuarioAPI.delete(
      "/delete/:codUsuario",
      datosUserDelete,
      validarDatos.ahora,
      controladorUsuarioBorrar.llamarBorrar
    );
  }
}

const rutasUsuario = new RutasUsuario();
export default rutasUsuario.rutasUsuarioAPI;
