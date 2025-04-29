import { body, param } from "express-validator";
import pool from "../../config/connection/dbConnection";
import { SQL_PARQUEADERO } from "../../app/parqueadero/repository/sql_parqueadero";
import { SQL_TIPO_VEHICULO } from "../../app/tipo-vehiculo/repository/sql_tipoVehiculo";

export const validarCrearTarifaDiaria = [
  body("codParqueadero", "El código del parqueadero es requerido").notEmpty(),
  body(
    "codParqueadero",
    "El código del parqueadero debe ser un número"
  ).isInt(),
  body("codParqueadero").custom(async (codParqueadero) => {
    const resultado = await pool.result(SQL_PARQUEADERO.FIND_BY_ID, [
      codParqueadero,
    ]);
    if (resultado.rows.length === 0) {
      throw new Error("El parqueadero no existe en la base de datos");
    }
    return true;
  }),
  body(
    "codTipoVehiculo",
    "El código del tipo de vehículo es requerido"
  ).notEmpty(),
  body(
    "codTipoVehiculo",
    "El código del tipo de vehículo debe ser un número"
  ).isInt(),
  body("codTipoVehiculo").custom(async (codTipoVehiculo) => {
    const resultado = await pool.result(SQL_TIPO_VEHICULO.FIND_BY_ID, [
      codTipoVehiculo,
    ]);
    if (resultado.rows.length === 0) {
      throw new Error("El tipo de vehículo no existe en la base de datos");
    }
    return true;
  }),
  body(
    "valorTarifaDiaria",
    "El valor de la tarifa diaria es requerido"
  ).notEmpty(),
  body(
    "valorTarifaDiaria",
    "El valor de la tarifa diaria debe ser un número"
  ).isNumeric(),
];

export const datosTarifaDiariaBorrar = [
  param("codParqueadero", "El código del parqueadero es requerido").isInt(),
  param(
    "codParqueadero",
    "Máximo 6 caracteres para el código de parqueadero"
  ).isLength({ max: 6 }),
  param(
    "codTipoVehiculo",
    "El código del tipo de vehículo es requerido"
  ).isInt(),
  param(
    "codTipoVehiculo",
    "Máximo 6 caracteres para el código de tipo de vehículo"
  ).isLength({ max: 6 }),
];

export const datosTarifaDiariaActualizar = [
  body("codParqueadero", "El código del parqueadero es requerido").notEmpty(),
  body(
    "codParqueadero",
    "El código del parqueadero debe ser un número"
  ).isInt(),
  body("codParqueadero").custom(async (codParqueadero) => {
    const resultado = await pool.result(SQL_PARQUEADERO.FIND_BY_ID, [
      codParqueadero,
    ]);
    if (resultado.rows.length === 0) {
      throw new Error("El parqueadero no existe en la base de datos");
    }
    return true;
  }),
  body(
    "codTipoVehiculo",
    "El código del tipo de vehículo es requerido"
  ).notEmpty(),
  body(
    "codTipoVehiculo",
    "El código del tipo de vehículo debe ser un número"
  ).isInt(),
  body("codTipoVehiculo").custom(async (codTipoVehiculo) => {
    const resultado = await pool.result(SQL_TIPO_VEHICULO.FIND_BY_ID, [
      codTipoVehiculo,
    ]);
    if (resultado.rows.length === 0) {
      throw new Error("El tipo de vehículo no existe en la base de datos");
    }
    return true;
  }),
  body(
    "valorTarifaDiaria",
    "El valor de la tarifa diaria es requerido"
  ).notEmpty(),
  body(
    "valorTarifaDiaria",
    "El valor de la tarifa diaria debe ser un número"
  ).isNumeric(),
];
