import { body, param } from "express-validator";

export const validarCrearPuesto = [
    body("parqueadero", "El parqueadero es requerido").notEmpty(),
    body("tipoVehiculo", "El tipo de vehiculo es requerido").notEmpty()
];

export const datosPuestoBorrar = [
    param("codPuesto", "Código de puesto requerido debe ser número").isInt(),
    param("codPuesto", "Máximo 6 caracteres").isLength({ max: 6 }),
];

export const datosPuestoActualizar = [
    body("codPuesto", "El código del puesto es requerido").notEmpty(),
    body("codPuesto", "El código del puesto debe ser un número").isInt(),
    body("parqueadero", "El parqueadero es requerido").notEmpty(),
    body("tipoVehiculo", "El tipo de vehiculo es requerido").notEmpty()
];