import { Component } from '@angular/core';

@Component({
  selector: 'app-practica07',
  imports: [],
  templateUrl: './practica07.component.html',
  styleUrl: './practica07.component.css'
})
export class Practica07Component {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  } 

}
