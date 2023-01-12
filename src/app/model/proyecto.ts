
export class Proyecto {

    id: number;
    nombre:string;
    urlFoto:string;
    descripcion:string;
   
    constructor(id:number, nombre:string, urlFoto:string, descripcion:string){

            this.id = id;
            this.nombre = nombre;
            this.urlFoto =urlFoto;
            this.descripcion = descripcion;           
    }
}