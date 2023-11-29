import { Component,ViewChild,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,LoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  @ViewChild('miName')
  miName!: ElementRef;
  @ViewChild('miLastname')
  miLastname!: ElementRef;
  @ViewChild('miMail')
  miMail!: ElementRef;
  @ViewChild('miCel')
  miCel !: ElementRef;
  @ViewChild('miUsu')
  miUsu!: ElementRef;
  @ViewChild('miPassword')
  miPassword!: ElementRef;

  registrar_Datos: String = '';

  constructor(
    public route: Router
    ){}

  registrarDatos(){
    const name = this.miName.nativeElement.value;
    const lastname = this.miLastname.nativeElement.value;
    const mail = this.miMail.nativeElement.value;
    const cel = this.miCel.nativeElement.value;
    const usu = this.miUsu.nativeElement.value;
    const pass = this.miPassword.nativeElement.value;
    localStorage.setItem('Name',name);
    localStorage.setItem('Lastname',lastname);
    localStorage.setItem('Mail',mail);
    localStorage.setItem('Cel',cel);
    localStorage.setItem('Usuario',usu);
    localStorage.setItem('Password',pass);
    this.registrar_Datos = "Perfil Registrado Correctamente";
  }


  navegarLogin(){
    this.route.navigateByUrl('login')
  }

}
