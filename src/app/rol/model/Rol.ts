class Rol {

    private _codRol: number;
    private _nombreRol: string;

    constructor(codRol: number, nombreRol: string) {
        this._codRol = codRol;
        this._nombreRol = nombreRol;
    }

    public get codRol(): number {
        return this._codRol;
    }

    public set codRol(codRol: number) {
        this._codRol = codRol;
    }

    public get nombreRol(): string {
        return this._nombreRol;
    }

    public set nombreRol(nombreRol: string) {
        this._nombreRol = nombreRol;
    }

}

export default Rol;