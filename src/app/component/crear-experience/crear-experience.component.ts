import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';

@Component({
  selector: 'app-crear-experience',
  templateUrl: './crear-experience.component.html',
  styleUrls: ['./crear-experience.component.css']
})
export class CrearExperienceComponent implements OnInit {

  experienciaForm: FormGroup;
  id!:number;
  experiencia: ExperienciaLaboral = {
    id : 0,
    nombre : '',
    fechaDesde: '',
    fechaHasta: '',
    institucion: '',
    informacion: ''
  };


  constructor( private fb: FormBuilder, private router: Router,
     private aRoute: ActivatedRoute, private experienciaService : ExperienciaLaboralService) { 
    this.experienciaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      fechaDesde: '',
      fechaHasta: '',
      institucion: ['', Validators.required],
      informacion: ['', Validators.required]
    })
    
  }
  
  ngOnInit(): void {
    this.id = this.aRoute.snapshot.params['id'];

  }
 
  getexperiencia(){
    this.experienciaService.getExperienciaLaboral(this.id).subscribe(data => {
      this.experiencia = data;
    this.rellenarCampos(data);
    })
  }
  
  public rellenarCampos(experiencia: ExperienciaLaboral){
    this.experienciaForm = this.fb.group({
      id: [experiencia.id],
      nombre: [experiencia.nombre, Validators.required],
      fechaDesde: [experiencia.fechaDesde],
      fechaHasta: [experiencia.fechaHasta],
      institucion: [experiencia.institucion, Validators.required],
      informacion: [experiencia.informacion, Validators.required],

    })
  }

  agregarExperienciaLaboral(this: any){
    const EXPERIENCIA: ExperienciaLaboral ={
      id: 0,
      nombre : this.experienciaForm.get('nombre')?.value,
      fechaDesde : this.educacionForm.get('fechaDesde')?.value,
      fechaHasta : this.educacionForm.get('fechaHasta')?.value,
      institucion : this.experienciaForm.get('institucion')?.value,
      informacion : this.experienciaForm.get('informacion')?.value,
    }
   
    
    this.experienciaService.guardarExperienciaLaboral(EXPERIENCIA).subscribe(() => {
      alert('La experiencia  fue cargado con exito');
      this.router.navigate(['/portfolio'])
    },
    (error: any) =>{
      console.log(error);
      
    });

  }
}
