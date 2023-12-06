
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { NavbarUComponent } from './core/navbar-u/navbar-u.component';
import { NavbarAComponent } from './core/navbar-a/navbar-a.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path:'User',
    component: NavbarUComponent,
    loadChildren:()=>import('./modules/user/user.module').then((m)=> m.UserModule),
    //canActivate:[AuthGuard]
  },
  {
    path:'Admin',
    component: NavbarAComponent,
    loadChildren:()=>import('./modules/admin/admin.module').then((m)=> m.AdminModule),
    //canActivate:[AuthAdminGuard]
  },
  {
    path:'authentication',
    component: LoginComponent,
    loadChildren: ()=> import('./modules/login/login.module').then((m)=>m.LoginModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
