import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

//   experienciasLaborales! : ExperienciaLaboral[];
//   roles!: string[];
//   isAdmin = false;
//   constructor(private experienciaLaboralService : ExperienciaLaboralService
//     ,private tokenService: TokenService) { }

  ngOnInit(){
//     this.getExperienciasLaborales();
//     this.roles = this.tokenService.getAuthorities();
//         this.roles.forEach(rol => {
//       if(rol == 'ROLE_ADMIN'){
//        this.isAdmin = true;
}
//     })
//   }

//   getExperienciasLaborales(){
//     this.experienciaLaboralService.getExperienciasLaborales().subscribe(data => {
//       this.experienciasLaborales = data;
//     })
//   }

//   public eliminarExperienciaLaboral(id: number){
//     alert('¿Seguro desea eliminar esta experiencia?');
//     this.experienciasLaborales.forEach( experiencia => {
//      if(experiencia.id == id)
//      this.experienciasLaborales.splice(this.experienciasLaborales.indexOf(experiencia), 1)
//    })
//     this.experienciaLaboralService.borrarExperienciaLaboral(id).subscribe(() => {
//      alert('La experiencia fue eliminado con exito');
//    }, (error: any) =>{
//      console.log(error);
//    });
// }
}
