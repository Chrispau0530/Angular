import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentGlobalComponent } from './components/content-global/content-global.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, ContentGlobalComponent, CommonModule,  HttpClientModule, DataTablesModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practicas';
}
