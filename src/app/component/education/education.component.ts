import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

//   educaciones!: Educacion[];
//   roles!: string[];
//   isAdmin = false;
//   constructor(private educacionService: EducacionService,
//     private tokenService: TokenService, private router: Router,  private aRoute: ActivatedRoute) { }

 ngOnInit(){
//     this.getEducacion();
//     this.roles = this.tokenService.getAuthorities();
//     this.roles.forEach(rol => {
//       if(rol == 'ROLE_ADMIN'){
//        this.isAdmin = true;
}
//     })
//   }

//   getEducacion(){
//     this.educacionService.getEducaciones().subscribe(data => {
//       this.educaciones = data;
//     })
//   }

//   public eliminarEducacion(id: number){
//     alert('¿Seguro desea eliminar esta educacion?');
//     this.educaciones.forEach( educacion => {
//      if(educacion.id == id)
//      this.educaciones.splice(this.educaciones.indexOf(educacion), 1)
//    })
//     this.educacionService.borrarEducacion(id).subscribe(() => {
//      alert('La educacion fue eliminada con exito');
//    }, (error: any) =>{
//      console.log(error);
//    });
// }

// public editarEducacion(id: number){
//   console.log(id);
//   this.router.navigate(['/editar-educacion'],{queryParams: {id: id}});
// }

}
