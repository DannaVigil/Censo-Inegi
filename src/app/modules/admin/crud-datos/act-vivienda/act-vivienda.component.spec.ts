import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActViviendaComponent } from './act-vivienda.component';

describe('ActViviendaComponent', () => {
  let component: ActViviendaComponent;
  let fixture: ComponentFixture<ActViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActViviendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
