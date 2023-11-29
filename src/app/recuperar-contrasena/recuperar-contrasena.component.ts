import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {

  Saludo: String = '';
  Menssage: String = '';

  constructor(
    public route: Router
    ){}

  saludar(){
    this.Saludo = "Hola Imundo";
    localStorage.setItem('saludo','Bienvenido al mundo de Angular');
  }

  mostrarStorage(){
    let messages = JSON.stringify(localStorage.getItem('saludo'));
    this.Menssage = messages;
  }

  navegarLogin(){
    this.route.navigateByUrl('login')
  }

}
