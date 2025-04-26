import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({path: "variables.env"});

class Security {
    public isAuthenticated(req: Request, res: Response, next: NextFunction) :any {
        if(!req.headers.authorization) {
            return res.status(401).json({error: "No autorizado"});
        }
        else {
            try {
                console.log("req.headers: ", req.headers);
                const myToken = req.headers.authorization?.split(" ")[1] as string;
                const secret = process.env.JWT_SECRET as string;
                console.log("clavesita: ", secret);

                console.log("token: ", myToken);
                const datos = jwt.verify(myToken, secret);

                next();
            } catch (error) {
                res.status(401).json({error: "Falsificación de token"});
            }
        }
    }
}

const security = new Security();
export default security;