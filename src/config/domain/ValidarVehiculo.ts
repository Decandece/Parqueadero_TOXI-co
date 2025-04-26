import { check } from "express-validator";

// Validador para crear vehículo
export const datosVehiculoCrear = [
  check("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
  check("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
  check("codTipoVehiculo", "El código de tipo de vehículo es obligatorio").not().isEmpty(),
  check("codTipoVehiculo", "El código de tipo de vehículo debe ser numérico").isNumeric(),
  check("placaVehiculo", "La placa del vehículo es obligatoria").not().isEmpty(),
  check("placaVehiculo", "La placa debe tener entre 5 y 10 caracteres").isLength({ min: 5, max: 10 }),
  check("modeloVehiculo", "El modelo del vehículo es obligatorio").not().isEmpty(),
  check("modeloVehiculo", "El modelo debe ser numérico").isNumeric(),
  check("colorVehiculo", "El color del vehículo es obligatorio").not().isEmpty(),
  check("colorVehiculo", "El color debe tener entre 3 y 20 caracteres").isLength({ min: 3, max: 20 }),
];

// Validador para actualizar vehículo
export const datosVehiculoActualizar = [
  check("codVehiculo", "El código de vehículo es obligatorio").not().isEmpty(),
  check("codVehiculo", "El código de vehículo debe ser numérico").isNumeric(),
  check("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
  check("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
  check("codTipoVehiculo", "El código de tipo de vehículo es obligatorio").not().isEmpty(),
  check("codTipoVehiculo", "El código de tipo de vehículo debe ser numérico").isNumeric(),
  check("placaVehiculo", "La placa del vehículo es obligatoria").not().isEmpty(),
  check("placaVehiculo", "La placa debe tener entre 5 y 10 caracteres").isLength({ min: 5, max: 10 }),
  check("modeloVehiculo", "El modelo del vehículo es obligatorio").not().isEmpty(),
  check("modeloVehiculo", "El modelo debe ser numérico").isNumeric(),
  check("colorVehiculo", "El color del vehículo es obligatorio").not().isEmpty(),
  check("colorVehiculo", "El color debe tener entre 3 y 20 caracteres").isLength({ min: 3, max: 20 }),
];

// Validador para eliminar vehículo
export const datosVehiculoBorrar = [
  check("codVehiculo", "El código de vehículo es obligatorio").not().isEmpty(),
  check("codVehiculo", "El código de vehículo debe ser numérico").isNumeric(),
];

// Validador para obtener vehículo por ID
export const datosVehiculoGet = [
  check("codVehiculo", "El código de vehículo es obligatorio").not().isEmpty(),
  check("codVehiculo", "El código de vehículo debe ser numérico").isNumeric(),
];

// Validador para obtener vehículo por placa
export const datosVehiculoGetPlaca = [
  check("placa", "La placa del vehículo es obligatoria").not().isEmpty(),
  check("placa", "La placa debe tener entre 5 y 10 caracteres").isLength({ min: 5, max: 10 }),
];

// Validador para obtener vehículos por usuario
export const datosVehiculoGetUsuario = [
  check("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
  check("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
];

// Validador para obtener vehículos por tipo
export const datosVehiculoGetTipo = [
  check("codTipoVehiculo", "El código de tipo de vehículo es obligatorio").not().isEmpty(),
  check("codTipoVehiculo", "El código de tipo de vehículo debe ser numérico").isNumeric(),
];
