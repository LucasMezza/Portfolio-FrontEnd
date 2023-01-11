import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExperienceComponent } from './editar-experience.component';

describe('EditarExperienceComponent', () => {
  let component: EditarExperienceComponent;
  let fixture: ComponentFixture<EditarExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
