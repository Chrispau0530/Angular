import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeraComponent } from './datatables/primera/primera.component';
import { ContentGlobalComponent } from './components/content-global/content-global.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,ContentGlobalComponent,CommonModule,PrimeraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practicas';
}
