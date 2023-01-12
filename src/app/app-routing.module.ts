import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CrearEducationComponent } from './component/crear-education/crear-education.component';
import { CrearExperienceComponent } from './component/crear-experience/crear-experience.component';
import { CrearProyectComponent } from './component/crear-proyect/crear-proyect.component';
import { EditarEducationComponent } from './component/editar-education/editar-education.component';
import { EditarExperienceComponent } from './component/editar-experience/editar-experience.component';
import { EditarProyectComponent } from './component/editar-proyect/editar-proyect.component';
import { PersonGuardService } from './guard/person-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'crear-educacion', component: CrearEducationComponent, canActivate : [PersonGuardService], data : {expectedRol:['admin']}},
  { path: 'crear-experiencia', component: CrearExperienceComponent, canActivate : [PersonGuardService], data : {expectedRol:['admin']}},
  { path: 'crear-proyecto', component: CrearProyectComponent, canActivate : [PersonGuardService], data : {expectedRol:['admin']} },
  { path: 'editar-educacion/:id', component: EditarEducationComponent, canActivate : [PersonGuardService], data : {expectedRol:['admin']} },
  { path: 'editar-experience/:id', component: EditarExperienceComponent, canActivate : [PersonGuardService], data : {expectedRol:['admin']} },
  { path: 'editar-proyecto/:id', component: EditarProyectComponent, canActivate : [PersonGuardService], data : {expectedRol:['admin']} },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }