import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio01Component } from '../../ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from '../../ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from '../../ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from '../../ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from '../../ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from '../../ejercicio-06/ejercicio-06.component';
import { Ejercicio07Component } from '../../ejercicio-07/ejercicio-07.component';
import { Ejercicio08Component } from '../../ejercicio-08/ejercicio-08.component';
import { Ejercicio09Component } from '../../ejercicio-09/ejercicio-09.component';
import { Ejercicio10Component } from '../../ejercicio-10/ejercicio-10.component';
import { Ejercicio11Component } from '../../ejercicio-11/ejercicio-11.component';
import { Ejercicio12Component } from '../../ejercicio-12/ejercicio-12.component';
import { LoginComponent } from "../login/login.component";
import { Tabla01Component } from '../../tareas/tabla01/tabla01.component';
import { Grafica01Component } from '../../tareas/grafica01/grafica01.component';
import { Tabla02Component } from '../../tareas/tabla02/tabla02.component';
import { Tabla03Component } from '../../tareas/tabla03/tabla03.component';
import { Tabla04Component } from '../../tareas/tabla04/tabla04.component';
import { HttpClientModule } from '@angular/common/http';
import { Grafica02Component } from '../../tareas/grafica02/grafica02.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    Ejercicio01Component,
    Ejercicio02Component,
    Ejercicio03Component,
    Ejercicio04Component,
    Ejercicio05Component,
    Ejercicio06Component,
    Ejercicio07Component,
    Ejercicio08Component,
    Ejercicio09Component,
    Ejercicio10Component,
    Ejercicio11Component,
    Ejercicio12Component,
    LoginComponent,
    Tabla01Component,
    Tabla02Component,
    Tabla03Component,
    Tabla04Component,
    HttpClientModule,
    Grafica01Component,
    Grafica02Component
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() exerciseName: string = '';
  @Input() isLoggedIn: boolean = false; 
  @Output() login = new EventEmitter<void>();

  // Método para manejar el clic de login
  loginClick() {
    this.login.emit(); 
  }
}
