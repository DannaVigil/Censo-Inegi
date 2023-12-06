import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLocalidadComponent } from './crud-localidad.component';

describe('CrudLocalidadComponent', () => {
  let component: CrudLocalidadComponent;
  let fixture: ComponentFixture<CrudLocalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudLocalidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
