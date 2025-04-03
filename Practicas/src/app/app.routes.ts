import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Ejercicio12UserComponent } from './ejercicio-12/ejercicio-12-user/ejercicio-12-user.component';
import { Ejercicio12HomeComponent } from './ejercicio-12/ejercicio-12-home/ejercicio-12-home.component';

export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"user", component:Ejercicio12UserComponent},
    {path:"home", component: Ejercicio12HomeComponent}
];
