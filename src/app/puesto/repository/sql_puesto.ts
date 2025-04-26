export const SQL_PUESTO = {
    FIND_ALL: "SELECT p.cod_puesto, p.cod_parqueadero, p.cod_tipo_vehiculo, p.detalle_puesto \
    FROM puestos p \
    ORDER BY p.cod_puesto",

    FIND_BY_ID: "SELECT p.cod_puesto, p.cod_parqueadero, p.cod_tipo_vehiculo, p.detalle_puesto \
    FROM puestos p \
    WHERE cod_puesto = $1",

    HOW_MANY: "SELECT COUNT(p.cod_puesto) as Cantidad \
    FROM puestos p \
    WHERE p.detalle_puesto = $1",

    ADD: "INSERT INTO puestos (cod_parqueadero, cod_tipo_vehiculo, detalle_puesto) \
    VALUES ($1, $2, $3) RETURNING cod_puesto",

    DELETE: "DELETE FROM puestos \
    WHERE cod_puesto = $1",

    UPDATE: "UPDATE puestos \
    SET cod_parqueadero = $1, cod_tipo_vehiculo = $2, detalle_puesto = $3 \
    WHERE cod_puesto = $4"
};

