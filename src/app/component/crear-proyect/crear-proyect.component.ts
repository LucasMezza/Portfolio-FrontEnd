import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-crear-proyect',
  templateUrl: './crear-proyect.component.html',
  styleUrls: ['./crear-proyect.component.css']
})
export class CrearProyectComponent implements OnInit {


  proyectoForm: FormGroup;
  proyecto: Proyecto = {
    id : 0,
    nombre : '',
    urlFoto: '',
    descripcion: ''
  };


  constructor( private fb: FormBuilder, private router: Router, private aRoute: ActivatedRoute, private proyectoService : ProyectoService) { 
    this.proyectoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      urlFoto: [''],
      descripcion: ['', Validators.required]
    })

  }
  
  ngOnInit(): void {
  }
 
  agregarProyecto(this: any){
    const proyecto: Proyecto ={
      id: 0,
      nombre : this.proyectoForm.get('nombre')?.value,
      urlFoto : this.proyectoForm.get('urlFoto')?.value,
      descripcion : this.proyectoForm.get('descripcion')?.value,
    }
    
    this.proyectoService.guardarProyecto(proyecto).subscribe(() => {
      alert('La proyecto fue cargado con exito');
      this.router.navigate(['/portfolio'])
    },
    (error: any) =>{
      console.log(error);
      
    });

  }
}
