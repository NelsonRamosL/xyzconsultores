export default class Impuestos {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual; // number
        this._deducciones = deducciones;    // number
    }


    get monto_bruto_anual() {
        return this._monto_bruto_anual;
    }

    set monto_bruto_anual(nuevoMonto) {
        this._monto_bruto_anual = nuevoMonto;
    }



    get deducciones() {
        return this._deducciones;
    }

    set deducciones(nuevoDeducciones) {
        this._deducciones = nuevoDeducciones;
    }


}
