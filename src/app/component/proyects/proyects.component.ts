import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})

export class ProyectsComponent implements OnInit {

//   proyectos!: Proyecto[];
//   roles!: string[];
//   isAdmin = false;
//   constructor(private proyectoService: ProyectoService
//     ,private tokenService: TokenService, private router: Router,  private aRoute: ActivatedRoute) { }

ngOnInit() {
//     this.getProyectos();
//     this.roles = this.tokenService.getAuthorities();
//     this.roles.forEach(rol => {
//       if(rol == 'ROLE_ADMIN'){
//        this.isAdmin = true;
}
//     })
//   }

//   getProyectos(){
//     this.proyectoService.getProyectos().subscribe(data => {
//       this.proyectos = data;
//     })
//   }

//   public eliminarProyecto(id: number){
//     alert('¿Seguro desea eliminar este proyecto?');
//     this.proyectos.forEach( educacion => {
//      if(educacion.id == id)
//      this.proyectos.splice(this.proyectos.indexOf(educacion), 1)
//    })
//     this.proyectoService.borrarProyecto(id).subscribe(() => {
//      alert('El proyecto  fue eliminada con exito');
//    }, (error: any) =>{
//      console.log(error);
//    });
// }
}
