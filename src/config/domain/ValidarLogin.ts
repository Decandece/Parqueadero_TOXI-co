import { body, param } from "express-validator";

export const validarLogin = [
    body("correoAcceso", "El correo es requerido").notEmpty(),
    body("correoAcceso", "El correo no es válido").isEmail(),
    body("claveAcceso", "La clave es requerida").notEmpty(),
    //body("claveAcceso", "La clave debe tener mínimo 6 caracteres").isLength({ min: 6 }),
    //body("uuidAcceso", "El uuid es requerido").notEmpty(),
    //body("uuidAcceso", "El uuid debe tener 36 caracteres").isLength({ max: 36 }),
    //body("uuidAcceso", "El uuid no es válido").isUUID(4),
    
];