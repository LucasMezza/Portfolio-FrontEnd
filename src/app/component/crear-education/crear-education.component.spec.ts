import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEducationComponent } from './crear-education.component';

describe('CrearEducationComponent', () => {
  let component: CrearEducationComponent;
  let fixture: ComponentFixture<CrearEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
