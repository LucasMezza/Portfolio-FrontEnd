import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExperienceComponent } from './crear-experience.component';

describe('CrearExperienceComponent', () => {
  let component: CrearExperienceComponent;
  let fixture: ComponentFixture<CrearExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
