class TipoVehiculo {

    private _codTipoVehiculo: number;
    private _ClaseTipoVehiculo: string;

    constructor(codTipoVehiculo: number, ClaseTipoVehiculo: string) {
        this._codTipoVehiculo = codTipoVehiculo;
        this._ClaseTipoVehiculo = ClaseTipoVehiculo;
    }

    public get codTipoVehiculo(): number {
        return this._codTipoVehiculo;
    }

    public set codTipoVehiculo(codTipoVehiculo: number) {
        this._codTipoVehiculo = codTipoVehiculo;
    }

    public get ClaseTipoVehiculo(): string {
        return this._ClaseTipoVehiculo;
    }

    public set ClaseTipoVehiculo(ClaseTipoVehiculo: string) {
        this._ClaseTipoVehiculo = ClaseTipoVehiculo;
    }
}

export default TipoVehiculo;