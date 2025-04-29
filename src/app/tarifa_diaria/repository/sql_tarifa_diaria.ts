export const SQL_TARIFA_DIARIA = {
    FIND_ALL: `
      SELECT td.cod_parqueadero, td.cod_tipo_vehiculo, td.valor_tarifa_diaria
      FROM tarifa_diaria td
      ORDER BY td.cod_parqueadero, td.cod_tipo_vehiculo;
    `,
  
    FIND_BY_ID: `
      SELECT td.cod_parqueadero, td.cod_tipo_vehiculo, td.valor_tarifa_diaria
      FROM tarifa_diaria td
      WHERE td.cod_parqueadero = $1 AND td.cod_tipo_vehiculo = $2;
    `,
  
    HOW_MANY: `
      SELECT COUNT(*) AS Cantidad
      FROM tarifa_diaria td
      WHERE td.cod_parqueadero = $1;
    `,
  
    ADD: `
      INSERT INTO tarifa_diaria (cod_parqueadero, cod_tipo_vehiculo, valor_tarifa_diaria)
      VALUES ($1, $2, $3)
      RETURNING cod_parqueadero, cod_tipo_vehiculo;
    `,
  
    DELETE: `
      DELETE FROM tarifa_diaria
      WHERE cod_parqueadero = $1 AND cod_tipo_vehiculo = $2;
    `,
  
    UPDATE: `
      UPDATE tarifa_diaria
      SET valor_tarifa_diaria = $1
      WHERE cod_parqueadero = $2 AND cod_tipo_vehiculo = $3;
    `
  };
  