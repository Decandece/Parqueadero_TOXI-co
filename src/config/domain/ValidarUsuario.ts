import { check } from "express-validator";

// Validador para obtener usuario por ID o rol
export const datosUserGet = [
  check("codRol", "El código de rol es obligatorio").not().isEmpty(),
  check("codRol", "El código de rol debe ser numérico").isNumeric(),
];

// Validador para crear usuario
export const datosUserCreate = [
  check("codRol", "El código de rol es obligatorio").not().isEmpty(),
  check("codRol", "El código de rol debe ser numérico").isNumeric(),
  check("documentoUsuario", "El documento del usuario es obligatorio")
    .not()
    .isEmpty(),
  check(
    "documentoUsuario",
    "El documento debe tener entre 5 y 15 caracteres"
  ).isLength({ min: 5, max: 15 }),
  check("nombresUsuario", "Los nombres del usuario son obligatorios")
    .not()
    .isEmpty(),
  check(
    "nombresUsuario",
    "Los nombres deben tener entre 2 y 50 caracteres"
  ).isLength({ min: 2, max: 50 }),
  check("apellidosUsuario", "Los apellidos del usuario son obligatorios")
    .not()
    .isEmpty(),
  check(
    "apellidosUsuario",
    "Los apellidos deben tener entre 2 y 50 caracteres"
  ).isLength({ min: 2, max: 50 }),
  check("generoUsuario", "El género del usuario es obligatorio")
    .not()
    .isEmpty(),
  check("generoUsuario", "El género debe ser 1,2,3,4,5,6,7").isIn([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]),
  check("fechaNacimientoUsuario", "La fecha de nacimiento es obligatoria")
    .not()
    .isEmpty(),
  check(
    "fechaNacimientoUsuario",
    "La fecha de nacimiento debe ser una fecha válida"
  ).isDate(),
  check("telefonoUsuario", "El teléfono del usuario es obligatorio")
    .not()
    .isEmpty(),
  check(
    "telefonoUsuario",
    "El teléfono debe tener entre 7 y 15 caracteres"
  ).isLength({ min: 7, max: 15 }),
];

// Validador para actualizar usuario
export const datosUserUpdate = [
  check("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
  check("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
  check("codRol", "El código de rol es obligatorio").not().isEmpty(),
  check("codRol", "El código de rol debe ser numérico").isNumeric(),
  check("documentoUsuario", "El documento del usuario es obligatorio")
    .not()
    .isEmpty(),
  check(
    "documentoUsuario",
    "El documento debe tener entre 5 y 15 caracteres"
  ).isLength({ min: 5, max: 15 }),
  check("nombresUsuario", "Los nombres del usuario son obligatorios")
    .not()
    .isEmpty(),
  check(
    "nombresUsuario",
    "Los nombres deben tener entre 2 y 50 caracteres"
  ).isLength({ min: 2, max: 50 }),
  check("apellidosUsuario", "Los apellidos del usuario son obligatorios")
    .not()
    .isEmpty(),
  check(
    "apellidosUsuario",
    "Los apellidos deben tener entre 2 y 50 caracteres"
  ).isLength({ min: 2, max: 50 }),
  check("generoUsuario", "El género del usuario es obligatorio")
    .not()
    .isEmpty(),
  check("generoUsuario", "El género debe ser un número entre 1 y 5").isIn([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]),
  check("fechaNacimientoUsuario", "La fecha de nacimiento es obligatoria")
    .not()
    .isEmpty(),
  check(
    "fechaNacimientoUsuario",
    "La fecha de nacimiento debe ser una fecha válida"
  ).isDate(),
  check("telefonoUsuario", "El teléfono del usuario es obligatorio")
    .not()
    .isEmpty(),
  check(
    "telefonoUsuario",
    "El teléfono debe tener entre 7 y 15 caracteres"
  ).isLength({ min: 7, max: 15 }),
];

// Validador para eliminar usuario
export const datosUserDelete = [
  check("codUsuario", "El código de usuario es obligatorio").not().isEmpty(),
  check("codUsuario", "El código de usuario debe ser numérico").isNumeric(),
];
