import express from "express";
import cors from "cors";
import morgan from "morgan";
import rutaRolApi from "../../app/rol/route/RutaRol";
import dotenv from "dotenv";
import rutaTipoVehiculoApi from "../../app/tipo-vehiculo/route/RutaTipoVehiculo";
import rutaUbicacionApi from "../../app/ubicacion/route/RutaUbicacion";
import rutaParqueaderoApi from "../../app/parqueadero/route/RutaParqueadero";
import rutaPuestoApi from "../../app/puesto/route/RutaPuesto";
import rutaLoginApi from "../../app/login/route/RutaLogin";
import security from "../../middleware/Security";
import rutasVehiculoAPI from "../../app/vehiculo/route/RutasVehiculo";
import rutasUsuarioAPI from "../../app/usuario/route/RutasUsuario";
import rutaTarifasDiariasApi from "../../app/tarifa_diaria/route/RutaTarifaDiaria";

dotenv.config();

class Servidor {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.app.set("PORT", 3123);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100Mb" }));
    this.app.use(express.urlencoded({ extended: true }));

    //Login
    this.app.use("/api/login", rutaLoginApi);

    //Parqueadero
    this.app.use("/api/parqueadero", rutaParqueaderoApi);

    //Puesto
    this.app.use("/api/puesto", security.isAuthenticated, rutaPuestoApi);

    //Rol
    this.app.use("/api/rol", rutaRolApi);

    //Tipo-Vehiculo
    this.app.use("/api/tipo-vehiculo", rutaTipoVehiculoApi);

    //Vehiculo
    this.app.use("/api/vehiculo", rutasVehiculoAPI);

    //Ubicacion
    this.app.use("/api/ubicacion", rutaUbicacionApi);

    //usuario
    this.app.use("/api/usuario", rutasUsuarioAPI);

    this.app.use("/api/tarifa-diaria", rutaTarifasDiariasApi);
  }

  public start(): void {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Servidor corriendo en el puerto: ", this.app.get("PORT"));
    });
  }
}

export default Servidor;
