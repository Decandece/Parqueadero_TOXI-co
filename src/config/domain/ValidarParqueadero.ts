import { body, param } from "express-validator";

export const validarCrearParqueadero = [
    body("ubicacion", "La ubicación es requerida").notEmpty(),
    body("nombreParqueadero", "El nombre del parqueadero es requerido").notEmpty(),
    body("nombreParqueadero", "El nombre del parqueadero debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    body("direccionParqueadero", "La dirección del parqueadero es requerida").notEmpty(),
    body("direccionParqueadero", "La dirección del parqueadero debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    body("telefonoParqueadero", "El teléfono del parqueadero es requerido").notEmpty(),
    body("telefonoParqueadero", "El teléfono del parqueadero debe tener un mínimo de 7 caracteres").isLength({ min: 7 })
];

export const datosParqueaderoBorrar = [
    param("codParqueadero", "Código de parqueadero requerido debe ser número").isInt(),
    param("codParqueadero", "Máximo 6 caracteres").isLength({ max: 6 }),
];

export const datosParqueaderoActualizar = [
    body("codParqueadero", "El código del parqueadero es requerido").notEmpty(),
    body("codParqueadero", "El código del parqueadero debe ser un número").isInt(),
    body("ubicacion", "La ubicación es requerida").notEmpty(),
    body("nombreParqueadero", "El nombre del parqueadero es requerido").notEmpty(),
    body("nombreParqueadero", "El nombre del parqueadero debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    body("direccionParqueadero", "La dirección del parqueadero es requerida").notEmpty(),
    body("direccionParqueadero", "La dirección del parqueadero debe tener un mínimo de 3 caracteres").isLength({ min: 3 }),
    body("telefonoParqueadero", "El teléfono del parqueadero es requerido").notEmpty(),
    body("telefonoParqueadero", "El teléfono del parqueadero debe tener un mínimo de 7 caracteres").isLength({ min: 7 })
];


