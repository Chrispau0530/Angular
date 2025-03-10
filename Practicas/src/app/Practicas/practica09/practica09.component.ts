import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-practica09',
  imports: [],
  templateUrl: './practica09.component.html',
  styleUrl: './practica09.component.css'
})
export class Practica09Component {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
