import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTipoViviendaComponent } from './crud-tipo-vivienda.component';

describe('CrudTipoViviendaComponent', () => {
  let component: CrudTipoViviendaComponent;
  let fixture: ComponentFixture<CrudTipoViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudTipoViviendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudTipoViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
