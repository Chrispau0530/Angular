import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeraComponent } from './datatables/primera/primera.component';
import { ContentGlobalComponent } from './components/content-global/content-global.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/content/content.component";
import { LoginComponent } from "./components/login/login.component"; 


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, ContentGlobalComponent, CommonModule, PrimeraComponent, HttpClientModule, DataTablesModule, BreadcrumbComponent, HeaderComponent, ContentComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practicas';
}
