class Ingreso {
    private _codIngreso: number;
    private _codUsuario: number;
    private _fechaIngreso: string;
    private _horaIngreso: string;

    constructor(codIngreso: number, codUsuario: number, fechaIngreso: string, horaIngreso: string) {
        this._codIngreso = codIngreso;
        this._codUsuario = codUsuario;
        this._fechaIngreso = fechaIngreso;
        this._horaIngreso = horaIngreso;
    }

    public get codIngreso(): number {
        return this._codIngreso;
    }

    public set codIngreso(codIngreso: number) {
        this._codIngreso = codIngreso;
    }

    public get codUsuario(): number {
        return this._codUsuario;
    }

    public set codUsuario(codUsuario: number) {
        this._codUsuario = codUsuario;
    }

    public get fechaIngreso(): string {
        return this._fechaIngreso;
    }

    public set fechaIngreso(fechaIngreso: string) {
        this._fechaIngreso = fechaIngreso;
    }

    public get horaIngreso(): string {
        return this._horaIngreso;
    }

    public set horaIngreso(horaIngreso: string) {
        this._horaIngreso = horaIngreso;
    }

}

export default Ingreso;