export const SQL_INGRESO = {
    FIND_ALL: `SELECT i.cod_ingreso, i.cod_usuario, i.fecha_ingreso, i.hora_ingreso 
        FROM ingresos i ORDER BY i.cod_ingreso`,

    FIND_BY_ID: `SELECT i.cod_ingreso, i.cod_usuario, i.fecha_ingreso, i.hora_ingreso 
        FROM ingresos i WHERE i.cod_ingreso = $1`,

    ADD: "INSERT INTO ingresos (cod_usuario, fecha_ingreso, hora_ingreso) \
        VALUES ($1, $2, $3) \
        RETURNING cod_ingreso",

    UPDATE: `UPDATE ingresos SET 
        cod_usuario = $2, fecha_ingreso = $3, hora_ingreso = $4 
        WHERE cod_ingreso = $1`,

    DELETE: `DELETE FROM ingresos WHERE cod_ingreso = $1`
};
