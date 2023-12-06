import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRolComponent } from './crud-rol.component';

describe('CrudRolComponent', () => {
  let component: CrudRolComponent;
  let fixture: ComponentFixture<CrudRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
