export class Credit {

    nombre : string;
    numero : string;
    fecha : string;
    cvv : number;
    
    constructor(nombre : string,numero : string,fecha : string,cvv : number){
        this.nombre = nombre;
        this.numero = numero;
        this.fecha = fecha;
        this.cvv = cvv;
    }

}
