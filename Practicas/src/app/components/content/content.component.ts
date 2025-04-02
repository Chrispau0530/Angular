import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { Practica01Component } from '../../Practicas/practica01/practica01.component';
import { Practica02Component } from '../../Practicas/practica02/practica02.component';



@Component({
  selector: 'app-content',
  standalone:true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class  ContentComponent {

}
