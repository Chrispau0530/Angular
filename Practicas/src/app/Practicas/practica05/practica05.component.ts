import { Component } from '@angular/core';

@Component({
  selector: 'app-practica05',
  imports: [],
  templateUrl: './practica05.component.html',
  styleUrl: './practica05.component.css'
})
export class Practica05Component {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];

}
