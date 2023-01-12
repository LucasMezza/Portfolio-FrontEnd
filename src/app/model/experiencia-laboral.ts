export class ExperienciaLaboral {

    id: number;
    nombre:string;
    fechaDesde:string;
    fechaHasta:string;
    institucion:string;
    informacion:string;
   
    constructor(id:number, nombre:string, fechaDesde:string, fechaHasta:string, institucion:string, informacion:string){

            this.id = id;
            this.nombre = nombre;
            this.fechaDesde = fechaDesde;
            this.fechaHasta = fechaHasta;
            this.institucion = institucion;
            this.informacion = informacion;           
    }
}