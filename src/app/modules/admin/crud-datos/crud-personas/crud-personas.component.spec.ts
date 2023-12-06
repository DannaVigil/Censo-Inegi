import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPersonasComponent } from './crud-personas.component';

describe('CrudPersonasComponent', () => {
  let component: CrudPersonasComponent;
  let fixture: ComponentFixture<CrudPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
