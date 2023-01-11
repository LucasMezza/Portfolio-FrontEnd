import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProyectComponent } from './crear-proyect.component';

describe('CrearProyectComponent', () => {
  let component: CrearProyectComponent;
  let fixture: ComponentFixture<CrearProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProyectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
