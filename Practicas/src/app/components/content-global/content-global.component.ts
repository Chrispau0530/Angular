import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SiderbarComponent } from '../siderbar/siderbar.component';

import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content-global',
  standalone: true,
  imports: [CommonModule, SiderbarComponent, RouterOutlet, HeaderComponent, BreadcrumbComponent,FooterComponent],
  templateUrl: './content-global.component.html',
  styleUrl: './content-global.component.css'
})
export class ContentGlobalComponent implements OnInit {
  isSidebarOpen = true;  // Valor por defecto
  isUserLoggedIn = false; // Cambia esto según tu lógica de autenticación

  ngOnInit() {
    const sidebarState = localStorage.getItem('sidebarState');
    this.isSidebarOpen = sidebarState === 'true';
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('Sidebar State:', this.isSidebarOpen); // Verifica el estado
    localStorage.setItem('sidebarState', String(this.isSidebarOpen));
  }
  
}
