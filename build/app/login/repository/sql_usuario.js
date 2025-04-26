"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USUARIO = void 0;
exports.SQL_USUARIO = {
    FIND_ALL: `SELECT u.cod_usuario, u.cod_rol, u.documento_usuario, 
        u.nombres_usuario, u.apellidos_usuario, u.genero_usuario, 
        u.fecha_nacimiento_usuario, u.telefono_usuario 
        FROM usuarios u ORDER BY u.cod_usuario`,
    FIND_BY_ID: `SELECT u.cod_usuario, u.cod_rol, u.documento_usuario, 
        u.nombres_usuario, u.apellidos_usuario, u.genero_usuario, 
        u.fecha_nacimiento_usuario, u.telefono_usuario 
        FROM usuarios u WHERE u.cod_usuario = $1`,
    HOW_MANY: `SELECT COUNT(u.cod_usuario) as cantidad 
        FROM usuarios u WHERE u.cod_usuario = $1`,
    ADD: `INSERT INTO usuarios (
        cod_rol, documento_usuario, nombres_usuario, 
        apellidos_usuario, genero_usuario, fecha_nacimiento_usuario, 
        telefono_usuario
    ) VALUES ($1, $2, $3, $4, $5, $6, $7) 
    RETURNING cod_usuario`,
    UPDATE: `UPDATE usuarios SET 
        cod_rol = $2, documento_usuario = $3, nombres_usuario = $4, 
        apellidos_usuario = $5, genero_usuario = $6, 
        fecha_nacimiento_usuario = $7, telefono_usuario = $8 
        WHERE cod_usuario = $1`,
    DELETE: `DELETE FROM usuarios WHERE cod_usuario = $1`
};
