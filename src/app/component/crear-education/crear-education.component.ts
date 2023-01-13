import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-crear-education',
  templateUrl: './crear-education.component.html',
  styleUrls: ['./crear-education.component.css']
})

export class CrearEducationComponent implements OnInit {

  educacionForm: FormGroup;
  educacion: Educacion = {
    id : 0,
    nombre : '',
    fechaDesde: '',
    fechaHasta: '',
    institucion: '',
    informacion: ''
  };

  constructor( private fb: FormBuilder, private router: Router, private aRoute: ActivatedRoute, private educacionService : EducacionService) { 
    this.educacionForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      fecha: [''],
      institucion: ['', Validators.required],
      informacion: ['', Validators.required]
    })

  }
  
  ngOnInit(): void {
  }
 
  agregarEducacion(this: any){
    const EDUCACION: Educacion ={
      id: 0,
      nombre : this.educacionForm.get('nombre')?.value,
      fechaDesde : this.educacionForm.get('fechaDesde')?.value,
      fechaHasta : this.educacionForm.get('fechaHasta')?.value,
      institucion : this.educacionForm.get('institucion')?.value,
      informacion : this.educacionForm.get('informacion')?.value,
    }
   
    console.log(EDUCACION);
    
    this.educacionService.guardarEducacion(EDUCACION).subscribe(() => {
      alert('La educacion fue cargada con exito');
      this.router.navigate(['/portfolio']);
    },
    (error: any) =>{
      console.log(error);
      
    });

  }
}
