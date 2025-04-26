import Parqueadero from "../../parqueadero/model/Parqueadero";
import TipoVehiculo from "../../tipo-vehiculo/model/TipoVehiculo";

class Puesto {
    private _codPuesto: number;
    private _parqueadero: Parqueadero;
    private _tipoVehiculo: TipoVehiculo;
    private _detallePuesto: string;

    constructor(codPuesto: number, parqueadero: Parqueadero, tipoVehiculo: TipoVehiculo, detallePuesto: string) {
        this._codPuesto = codPuesto;
        this._parqueadero = parqueadero;
        this._tipoVehiculo = tipoVehiculo;
        this._detallePuesto = detallePuesto;
    }

    public get codPuesto(): number {
        return this._codPuesto;
    }

    public set codPuesto(codPuesto: number) {
        this._codPuesto = codPuesto;
    }

    public get parqueadero(): Parqueadero {
        return this._parqueadero;
    }

    public set parqueadero(parqueadero: Parqueadero) {
        this._parqueadero = parqueadero;
    }

    public get tipoVehiculo(): TipoVehiculo {
        return this._tipoVehiculo;
    }

    public set tipoVehiculo(tipoVehiculo: TipoVehiculo) {
        this._tipoVehiculo = tipoVehiculo;
    }

    public get detallePuesto(): string {
        return this._detallePuesto;
    }   

    public set detallePuesto(detallePuesto: string) {
        this._detallePuesto = detallePuesto;
    }
}

export default Puesto;