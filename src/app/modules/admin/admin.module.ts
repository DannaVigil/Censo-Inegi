import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CrudDatosComponent } from './crud-datos/crud-datos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatRippleModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';


import { TablaGenericaComponent } from './crud-datos/tabla-generica/tabla-generica.component';
import { CrudRolComponent } from './crud-datos/crud-rol/crud-rol.component';
import { CrudUserComponent } from './crud-datos/crud-user/crud-user.component';
import { CrudMunicipioComponent } from './crud-datos/crud-municipio/crud-municipio.component';
import { CrudTipoViviendaComponent } from './crud-datos/crud-tipo-vivienda/crud-tipo-vivienda.component';
import { CrudActEconomicaComponent } from './crud-datos/crud-act-economica/crud-act-economica.component';
import { CrudViviendaComponent } from './crud-datos/crud-vivienda/crud-vivienda.component';
import { CrudPersonasComponent } from './crud-datos/crud-personas/crud-personas.component';
import { ActViviendaComponent } from './crud-datos/act-vivienda/act-vivienda.component';
import { CrudLocalidadComponent } from './crud-datos/crud-localidad/crud-localidad.component';
import { CoreModule } from 'src/app/core/core.module';




@NgModule({
  declarations: [
    CrudDatosComponent,

    TablaGenericaComponent,
     CrudRolComponent,
     CrudUserComponent,
     CrudMunicipioComponent,
     CrudTipoViviendaComponent,
     CrudActEconomicaComponent,
     CrudViviendaComponent,
     CrudPersonasComponent,
     ActViviendaComponent,
     CrudLocalidadComponent,
     

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatNativeDateModule,CoreModule,
    MatSelectModule,MatSlideToggleModule,MatProgressSpinnerModule,MatPaginatorModule,
    MatRippleModule,MatDatepickerModule,FormsModule,ReactiveFormsModule,
    MatSelectModule,MatOptionModule,MatTableModule,
    MatTabsModule,MatButtonModule,MatIconModule,
    MatDividerModule,MatInputModule,MatCardModule,
  ]
})
export class AdminModule { }
