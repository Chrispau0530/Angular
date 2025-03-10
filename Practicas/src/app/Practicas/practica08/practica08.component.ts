import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-practica08',
  imports: [],
  templateUrl: './practica08.component.html',
  styleUrl: './practica08.component.css'
})
export class Practica08Component {
  @Input() name = 'ChristianPaul';

}
