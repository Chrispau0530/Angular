import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContentGlobalComponent } from './components/content-global/content-global.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContentGlobalComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practicas';
}
