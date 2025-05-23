"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_ROL = void 0;
exports.SQL_ROL = {
    FIND_ALL: "SELECT r.cod_rol, r.nombre_rol \
  FROM roles r \
  ORDER BY r.cod_rol",
    FIND_BY_ID: "SELECT r.cod_rol, r.nombre_rol \
  FROM roles  r \
  WHERE cod_rol = $1",
    HOW_MANY: "SELECT COUNT(r.cod_rol) as Cantidad \
  FROM roles r \
  WHERE r.nombre_rol = $1",
    ADD: "INSERT INTO roles (nombre_rol) \
  VALUES ($1) RETURNING cod_rol",
    DELETE: "DELETE FROM roles \
  WHERE cod_rol = $1",
    UPDATE: "UPDATE roles \
  SET nombre_rol = $1 \
  WHERE cod_rol = $2"
};
