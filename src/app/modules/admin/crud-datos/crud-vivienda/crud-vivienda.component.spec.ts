import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudViviendaComponent } from './crud-vivienda.component';

describe('CrudViviendaComponent', () => {
  let component: CrudViviendaComponent;
  let fixture: ComponentFixture<CrudViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudViviendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
