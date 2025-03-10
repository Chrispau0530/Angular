import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-practica09',
  standalone: true,
  imports: [],
  templateUrl: './practica09.component.html',
  styleUrl: './practica09.component.css'
})
export class Practica09Component {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    console.log('Evento emitido 🐢'); // <--- Agrega este log para verificar
    this.addItemEvent.emit('🐢');
  }
}
