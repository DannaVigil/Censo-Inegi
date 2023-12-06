import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudRolComponent } from './crud-datos/crud-rol/crud-rol.component';
import { CrudUserComponent } from './crud-datos/crud-user/crud-user.component';
import { CrudMunicipioComponent } from './crud-datos/crud-municipio/crud-municipio.component';
import { CrudTipoViviendaComponent } from './crud-datos/crud-tipo-vivienda/crud-tipo-vivienda.component';
import { CrudActEconomicaComponent } from './crud-datos/crud-act-economica/crud-act-economica.component';
import { CrudViviendaComponent } from './crud-datos/crud-vivienda/crud-vivienda.component';
import { ActViviendaComponent } from './crud-datos/act-vivienda/act-vivienda.component';
import { CrudPersonasComponent } from './crud-datos/crud-personas/crud-personas.component';
import { CrudLocalidadComponent } from './crud-datos/crud-localidad/crud-localidad.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'Rol',
    pathMatch: 'full'
  },
  // {
  //   path: 'agendarAdmin',
  //   component: AgendarAComponent
  // },
  {
    path: 'Rol',
    component: CrudRolComponent
  },
  {
    path: 'User',
    component: CrudUserComponent
  },
  {
    path: 'Municipio',
    component: CrudMunicipioComponent
  },
  {
    path: 'Tipo-Vivienda',
    component: CrudTipoViviendaComponent
  },
  {
    path: 'Act-Economica',
    component: CrudActEconomicaComponent
  },
  {
    path: 'Actividades-Vivienda',
    component: ActViviendaComponent
  },
  {
    path: 'Vivienda',
    component: CrudViviendaComponent
  },
  {
    path: 'Personas',
    component: CrudPersonasComponent
  },
  {
    path: 'Localidades',
    component: CrudLocalidadComponent
  },
  

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
