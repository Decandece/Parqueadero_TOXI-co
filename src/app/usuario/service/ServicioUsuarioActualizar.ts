import pool from "../../../config/connection/dbConnection";
import Usuario from "../model/Usuario";
import { Response } from "express";
import { SQL_USUARIO } from "../repository/sql_usuario";

class ServicioUsuarioActualizar {
  public static async actualizarUsuario(
    objUsuario: Usuario,
    res: Response
  ): Promise<any> {
    await pool
      .task(async (consulta) => {
        let caso = 1;
        let objActualizado: any;

        // Verificar si el documento ya existe para otro usuario
        const documentos = await consulta.oneOrNone(
          "SELECT COUNT(u.cod_usuario) as cantidad FROM usuarios u \
          WHERE u.documento_usuario = $1 AND u.cod_usuario != $2",
          [objUsuario.documentoUsuario, objUsuario.codUsuario]
        );

        if (documentos.cantidad == 0) {
          caso = 2;
          objActualizado = await consulta.result(SQL_USUARIO.UPDATE, [
            objUsuario.codRol,
            objUsuario.documentoUsuario,
            objUsuario.nombresUsuario,
            objUsuario.apellidosUsuario,
            objUsuario.generoUsuario,
            objUsuario.fechaNacimientoUsuario,
            objUsuario.telefonoUsuario,
            objUsuario.codUsuario,
          ]);
        }
        return { caso, objActualizado };
      })
      .then(({ caso, objActualizado }) => {
        switch (caso) {
          case 1:
            res.status(400).json({
              respuesta: "Ya existe otro usuario con ese documento",
            });
            break;

          default:
            res.status(200).json({
              respuesta: "Usuario actualizado correctamente",
              detalle: objActualizado.rowCount,
            });
            break;
        }
      })
      .catch((miError) => {
        console.log(miError);
        res.status(400).json({ respuesta: "Error en la actualización" });
      });
  }
}
export default ServicioUsuarioActualizar;
