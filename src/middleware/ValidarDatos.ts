import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class ValidarDatos {
  public ahora(req: Request, res: Response, next: NextFunction): void {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      res.status(400).json({ errores: errores.array() });
    } else {
      next();
    }
  }
}

const validarDatos = new ValidarDatos();
export default validarDatos;
