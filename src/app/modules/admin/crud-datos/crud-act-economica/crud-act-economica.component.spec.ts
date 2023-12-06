import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudActEconomicaComponent } from './crud-act-economica.component';

describe('CrudActEconomicaComponent', () => {
  let component: CrudActEconomicaComponent;
  let fixture: ComponentFixture<CrudActEconomicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudActEconomicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudActEconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
