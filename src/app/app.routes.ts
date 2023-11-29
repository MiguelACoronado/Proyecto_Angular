import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'RecuperarContra', component:RecuperarContrasenaComponent}
];
