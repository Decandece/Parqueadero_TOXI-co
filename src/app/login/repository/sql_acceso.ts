export const SQL_LOGIN = {
    FIND_BY_USER: "SELECT u.cod_usuario, r.nombre_rol, u.nombres_usuario, u.apellidos_usuario \
        FROM usuarios u \
        JOIN roles r ON u.cod_rol = r.cod_rol \
        WHERE u.cod_usuario = $1",

    FIND_BY_CORREO: "SELECT a.cod_usuario, a.correo_acceso, a.clave_acceso, a.uuid_acceso\
        FROM accesos a \
        WHERE correo_acceso = $1",

    
    
};