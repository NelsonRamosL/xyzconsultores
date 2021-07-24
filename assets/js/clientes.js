export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;   // string
        this._impuesto = impuesto || [];  // object
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevonombre){
        this._nombre = nuevonombre;
        }
        


    get impuesto() {
        return this._impuesto;
    }


calcularImpuesto(impuesto){

  this._impuesto = ((impuesto.monto_bruto_anual - impuesto.deducciones)*21/100);

}
}
