import { Component,ViewChild,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { RecuperarContrasenaComponent } from '../recuperar-contrasena/recuperar-contrasena.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('miUser')
  miUser!: ElementRef;

  @ViewChild('miPass')
  miPass!: ElementRef;

  

  registrar_Datos: String = '';
 

  constructor(
    public route: Router
    ){}

  registrarDatos(){
    const user = this.miUser.nativeElement.value;
    const pass = this.miPass.nativeElement.value;
    this.registrar_Datos = "Datos Registrados";
    localStorage.setItem('Usuario',user);
    localStorage.setItem('Password',pass);
  }

 

  navegarRegister(){
    this.route.navigateByUrl('register')
  }

  navegarRecuperarContra(){
    this.route.navigateByUrl('RecuperarContra')
  }
}
