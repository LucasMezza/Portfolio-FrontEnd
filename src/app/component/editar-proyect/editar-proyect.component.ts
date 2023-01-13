import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyect',
  templateUrl: './editar-proyect.component.html',
  styleUrls: ['./editar-proyect.component.css']
})

export class EditarProyectComponent implements OnInit {

  proyectoForm: FormGroup;
  id!:number;
  proyecto: Proyecto = {
    id : 0,
    nombre : '',
    urlFoto: '',
    descripcion: ''
  };

  constructor( private fb: FormBuilder, private router: Router,
     private aRoute: ActivatedRoute, private proyectoService : ProyectoService) { 
    this.proyectoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      urlFoto: [''],
      descripcion: ['', Validators.required]
    })
    

 
  }
  
  ngOnInit(): void {

    this.id = this.aRoute.snapshot.params['id'];

   this.getProyecto();
  }
 
  getProyecto(){
    this.proyectoService.getProyecto(this.id).subscribe(data => {
      this.proyecto = data;
    this.rellenarCampos(data);
    })
  }
  
  public rellenarCampos(proyecto: Proyecto){
    this.proyectoForm = this.fb.group({
      id: [proyecto.id],
      nombre: [proyecto.nombre, Validators.required],
      urlFoto: [proyecto.urlFoto],
      descripcion: [proyecto.descripcion, Validators.required],

    })
  }

  actualizarProyecto(){
    const proyecto: Proyecto ={
      id: 0,
      nombre : this.proyectoForm.get('nombre')?.value,
      urlFoto : this.proyectoForm.get('urlFoto')?.value,
      descripcion : this.proyectoForm.get('descripcion')?.value,
    }

      
      this.proyectoService.actualizarProyecto(this.id,proyecto).subscribe(() => {
        alert('La proyecto  fue actualizado con exito');
        this.router.navigate(['/portfolio'])
      }, (error: any) =>{
        console.log(error);
        this.proyectoForm.reset();
        
      }
      );
  }

}
