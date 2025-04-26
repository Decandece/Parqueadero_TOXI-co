"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    user: process.env.USER_DB,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.USER_PASSWORD,
    port: parseInt(process.env.PORT, 10),
});
pool.connect((err) => {
    if (err) {
        console.error("Error al conectarse a la base de datos: ", err);
    }
    else {
        console.log("Conexión exitosa a la base de datos");
    }
});
exports.default = pool;
