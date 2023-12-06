import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMunicipioComponent } from './crud-municipio.component';

describe('CrudMunicipioComponent', () => {
  let component: CrudMunicipioComponent;
  let fixture: ComponentFixture<CrudMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMunicipioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
