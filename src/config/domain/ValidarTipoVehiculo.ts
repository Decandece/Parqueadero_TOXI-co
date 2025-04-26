import { check } from "express-validator";

// Validador para crear tipo de vehículo
export const datosTipoVehiculoCrear = [
  check("nombreTipoVehiculo", "El nombre del tipo de vehículo es obligatorio").not().isEmpty(),
  check("nombreTipoVehiculo", "El nombre debe tener entre 3 y 50 caracteres").isLength({ min: 3, max: 50 }),
  check("tarifaTipoVehiculo", "La tarifa del tipo de vehículo es obligatoria").not().isEmpty(),
  check("tarifaTipoVehiculo", "La tarifa debe ser numérica").isNumeric(),
];

// Validador para actualizar tipo de vehículo
export const datosTipoVehiculoActualizar = [
  check("codTipoVehiculo", "El código del tipo de vehículo es obligatorio").not().isEmpty(),
  check("codTipoVehiculo", "El código del tipo de vehículo debe ser numérico").isNumeric(),
  check("nombreTipoVehiculo", "El nombre del tipo de vehículo es obligatorio").not().isEmpty(),
  check("nombreTipoVehiculo", "El nombre debe tener entre 3 y 50 caracteres").isLength({ min: 3, max: 50 }),
  check("tarifaTipoVehiculo", "La tarifa del tipo de vehículo es obligatoria").not().isEmpty(),
  check("tarifaTipoVehiculo", "La tarifa debe ser numérica").isNumeric(),
];

// Validador para eliminar tipo de vehículo
export const datosTipoVehiculoBorrar = [
  check("codTipoVehiculo", "El código del tipo de vehículo es obligatorio").not().isEmpty(),
  check("codTipoVehiculo", "El código del tipo de vehículo debe ser numérico").isNumeric(),
];

// Validador para obtener tipo de vehículo por ID
export const datosTipoVehiculoGet = [
  check("codTipoVehiculo", "El código del tipo de vehículo es obligatorio").not().isEmpty(),
  check("codTipoVehiculo", "El código del tipo de vehículo debe ser numérico").isNumeric(),
];
