import { body, param} from "express-validator";

export const validarCrearRol = [
    body("nombreRol", "El nombre del rol es requerido").notEmpty(),
    body("nombreRol", "El nombre del rol debe tener un mínimo de 3 caracteres").isLength({min: 5})
];

export const datosRolBorrar = [
    param( "codRol", "Rol requeridodebe ser numero").isInt(),
    param( "codRol", "maximo 6 caracteres").isLength({max:6}),
];

export const datosRolActualizar = [
    body("codRol", "El código del rol es requerido").notEmpty(),
    body("codRol", "El código del rol debe ser un número").isInt(),
    body("nombreRol", "El nombre del rol es requerido").trim().notEmpty(),
    body("nombreRol", "El nombre del rol debe tener un mínimo de 3 caracteres").isLength({min: 5})
];