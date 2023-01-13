import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-education',
  templateUrl: './editar-education.component.html',
  styleUrls: ['./editar-education.component.css']
})
export class EditarEducationComponent implements OnInit {


  educacionForm: FormGroup;
  id!:number;
  educacion: Educacion = {
    id : 0,
    nombre : '',
    fechaDesde: '',
    fechaHasta: '',
    institucion: '',
    informacion: ''
  };


  constructor( private fb: FormBuilder, private router: Router,
     private aRoute: ActivatedRoute, private educacionService : EducacionService) { 
    this.educacionForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      fechaDesde: [''],
      fechaHasta: [''],
      institucion: ['', Validators.required],
      informacion: ['', Validators.required]
    })
    

 
  }
  
  ngOnInit(): void {
    
    this.id = this.aRoute.snapshot.params['id'];
    this.getEducacion();
  }
 
  getEducacion(){
    this.educacionService.getEducacion(this.id).subscribe(data => {
      this.educacion = data;
    this.rellenarCampos(data);
    })
  }
  
  public rellenarCampos(educacion: Educacion){
    this.educacionForm = this.fb.group({
      id: [educacion.id],
      nombre: [educacion.nombre, Validators.required],
      fechaDesde: [educacion.fechaDesde],
      fechaHasta: [educacion.fechaHasta],
      institucion: [educacion.institucion, Validators.required],
      informacion: [educacion.informacion, Validators.required],

    })
  }

  actualizarEducacion(){
    const EDUCACION: Educacion ={
      id: 0,
      nombre : this.educacionForm.get('nombre')?.value,
      fechaDesde : this.educacionForm.get('fechaDesde')?.value,
      fechaHasta : this.educacionForm.get('fechaHasta')?.value,
      institucion : this.educacionForm.get('institucion')?.value,
      informacion : this.educacionForm.get('informacion')?.value,
    }
   
    console.log(EDUCACION);
    
    this.educacionService.actualizarEducacion(this.id,EDUCACION).subscribe(() => {
      alert('Educacion cargada con exito');
      this.router.navigate(['/portfolio'])
    },
    (error: any) =>{
      console.log(error);
      
    });

  }
}
