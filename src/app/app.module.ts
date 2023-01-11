import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { EducationComponent } from './component/education/education.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CrearExperienceComponent } from './component/crear-experience/crear-experience.component';
import { CrearEducationComponent } from './component/crear-education/crear-education.component';
import { CrearProyectComponent } from './component/crear-proyect/crear-proyect.component';
import { EditarProyectComponent } from './component/editar-proyect/editar-proyect.component';
import { EditarEducationComponent } from './component/editar-education/editar-education.component';
import { EditarExperienceComponent } from './component/editar-experience/editar-experience.component';
import { FooterComponent } from './component/footer/footer.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    LoginComponent,
    PageNotFoundComponent,
    CrearExperienceComponent,
    CrearEducationComponent,
    CrearProyectComponent,
    EditarProyectComponent,
    EditarEducationComponent,
    EditarExperienceComponent,
    FooterComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
