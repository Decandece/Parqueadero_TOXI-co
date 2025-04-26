import { Response } from "express";
import pool from "../../../config/connection/dbConnection";
import { SQL_TIPO_VEHICULO } from "../repository/sql_tipoVehiculo";

class ServicioTipoVehiculoConsulta {
  protected static async obtenerTodos(res: Response): Promise<any> {
    try {
      const misDatos = await pool.result(SQL_TIPO_VEHICULO.FIND_ALL);

      if (misDatos.rows.length === 0) {
        return res.status(404).json({
          respuesta: "No se encontraron tipos de vehículo",
        });
      }

      res.status(200).json({
        respuesta: "Consulta de tipos de vehiculos exitosa",
        cantidad: misDatos.rows.length,
        tiposVehiculos: misDatos.rows,
      });
    } catch (miError) {
      console.error(miError);
      res.status(500).json({
        respuesta: "Error interno al consultar tipos de vehículo",
      });
    }
  }

  protected static async obtenerPorId(
    codTipoVehiculo: number,
    res: Response
  ): Promise<any> {
    try {
      const misDatos = await pool.result(SQL_TIPO_VEHICULO.FIND_BY_ID, [
        codTipoVehiculo,
      ]);

      if (misDatos.rows.length === 0) {
        return res.status(404).json({
          respuesta: "No se encontró el tipo de vehículo",
        });
      }

      res.status(200).json({
        respuesta: "Consulta de tipo de vehículo exitosa",
        tipoVehiculo: misDatos.rows[0],
      });
    } catch (miError) {
      console.error(miError);
      res.status(500).json({
        respuesta: "Error interno al consultar el tipo de vehículo",
      });
    }
  }
}

export default ServicioTipoVehiculoConsulta;
