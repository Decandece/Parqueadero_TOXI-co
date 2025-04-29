class TarifaDiaria{
    private _codParqueadero: number;
    private _codTipoVehiculo: number;
    private _valorTarifaDiaria: number;

    constructor(codParqueadero: number, codTipoVehiculo: number, valorTarifaDiaria: number) {
        this._codParqueadero = codParqueadero;
        this._codTipoVehiculo = codTipoVehiculo;
        this._valorTarifaDiaria = valorTarifaDiaria;
    }

    public get codParqueadero(): number {
        return this._codParqueadero;
    }

    public set codParqueadero(codParqueadero: number) {
        this._codParqueadero = codParqueadero;
    }

    public get codTipoVehiculo(): number {
        return this._codTipoVehiculo;
    }

    public set codTipoVehiculo(codTipoVehiculo: number) {
        this._codTipoVehiculo = codTipoVehiculo;
    }

    public get valorTarifaDiaria(): number {
        return this._valorTarifaDiaria;
    }

    public set valorTarifaDiaria(valorTarifaDiaria: number) {
        this._valorTarifaDiaria = valorTarifaDiaria;
    }
}
export default TarifaDiaria;