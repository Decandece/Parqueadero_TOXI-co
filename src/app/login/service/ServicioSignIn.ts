import { Response } from "express";
import Acceso from "../model/Acceso";
import pool from "../../../config/connection/dbConnection";
import { SQL_LOGIN } from "../repository/sql_acceso";
import Ingreso from "../model/Ingreso";
import { SQL_INGRESO } from "../repository/sql_ingreso";
import cifrar from "bcryptjs"
import jwtFront from "jsonwebtoken";
import InfoToken from "../model/InfoToken";

import dotenv from "dotenv";
dotenv.config({path: "variables.env"});


class ServicioSignIn {
    protected static async signIn(acceso: Acceso, res: Response): Promise<any> {
        await pool
        .task(async (consulta) => {
            let caso = 1;
            let respuesta = null;
            
            //const claveCifrada = cifrar.hashSync(acceso.claveAcceso, 8);
            
            const accesoRev = await consulta.oneOrNone(SQL_LOGIN.FIND_BY_CORREO, [acceso.correoAcceso]);
            
            const claveCorrecta = cifrar.compareSync(acceso.claveAcceso, accesoRev.claveAcceso);
            

            if(accesoRev && claveCorrecta) {
                caso = 2;
                
                const fechaActual = new Date();
                const isoString = fechaActual.toISOString(); // '2024-04-01T14:30:00.000Z'

                const [fecha, hora] = isoString.split("T"); // Separa fecha y hora
                const horaLimpia = hora.slice(0, 8); // Elimina los milisegundos y la 'Z'

                const ingresoNuevo = new Ingreso(0, accesoRev.codUsuario, fecha, horaLimpia);

                //Insert a ingresos
                consulta.one(
                    SQL_INGRESO.ADD, 
                    [accesoRev.codUsuario, ingresoNuevo.fechaIngreso, ingresoNuevo.horaIngreso]
                );

                const infoUsuario = await consulta.one(
                    SQL_LOGIN.FIND_BY_USER, [accesoRev.codUsuario]
                ) as InfoToken;

                //Generar token
                const secret =  process.env.JWT_SECRET as string;
                const token = jwtFront.sign(infoUsuario, secret, {expiresIn: "1h"});

                console.log("Secret: ", secret);
                console.log("Token: ", token);
                respuesta = token;
            }

            return { caso, respuesta };
        })
        .then(({ caso, respuesta }) => {
            switch (caso) {
                case 1:
                    res.status(401).json({error: "Correo o contraseña incorrectos"});
                    break;
                default:
                    res.status(200).json({
                        mensaje: "Inicio de sesión exitoso",
                        token: respuesta
                    });
                    
                    break;
            }
        })
        .catch((miError) => {
            console.log("Error al iniciar sesión: ", miError);
            res.status(401).json({error: "Error al iniciar sesión"});
        });

    }
}

export default ServicioSignIn;