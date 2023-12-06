import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NavbarAComponent } from './navbar-a/navbar-a.component';
import { NavbarUComponent } from './navbar-u/navbar-u.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NavbarAComponent,
    NavbarUComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class CoreModule { }
