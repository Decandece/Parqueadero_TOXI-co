import { body, param} from "express-validator";

export const validarCrearUbicacion = [
    body("codPadreUbicacion", "El código de la ubicación padre es requerido").notEmpty(),
    body("codPadreUbicacion", "El código de la ubicación padre debe ser un número").isInt(),
    body("codExternoUbicacion", "El código externo de la ubicación es requerido").notEmpty(),
    body("codExternoUbicacion", "El código externo de la ubicación debe tener un mínimo de 3 caracteres").isLength({min: 3}),
    body("nombreUbicacion", "El nombre de la ubicación es requerido").notEmpty(),
    body("nombreUbicacion", "El nombre de la ubicación debe tener un mínimo de 3 caracteres").isLength({min: 3})
];

export const datosUbicacionBorrar = [
    param( "codUbicacion", "Ubicación requerida debe ser numero").isInt(),
    param( "codUbicacion", "maximo 6 caracteres").isLength({max:6}),
];

export const datosUbicacionActualizar = [
    body("codUbicacion", "El código de la ubicación es requerido").notEmpty(),
    body("codUbicacion", "El código de la ubicación debe ser un número").isInt(),
    body("codPadreUbicacion", "El código de la ubicación padre es requerido").notEmpty(),
    body("codPadreUbicacion", "El código de la ubicación padre debe ser un número").isInt(),
    body("codExternoUbicacion", "El código externo de la ubicación es requerido").notEmpty(),
    body("codExternoUbicacion", "El código externo de la ubicación debe tener un mínimo de 3 caracteres").isLength({min: 3}),
    body("nombreUbicacion", "El nombre de la ubicación es requerido").notEmpty(),
    body("nombreUbicacion", "El nombre de la ubicación debe tener un mínimo de 3 caracteres").isLength({min: 3})
];