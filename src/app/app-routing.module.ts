import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'login',
    data: {
      breadcrumb: 'Login'
  },
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
  },
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
