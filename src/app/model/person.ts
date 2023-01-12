export class Person {

    idPersona: number;
    nombre:string;
    urlFoto:string;
    sobreMi:string;
    password:string;

    constructor(idPersona:number, nombre:string, urlFoto:string, sobreMi:string, password:string){

            this.idPersona = idPersona;
            this.nombre = nombre;
            this.urlFoto = urlFoto;
            this.sobreMi = sobreMi;
            this.password = password;
    }
}