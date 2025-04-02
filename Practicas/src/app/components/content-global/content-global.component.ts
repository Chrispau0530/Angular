import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-global',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './content-global.component.html',
  styleUrls: ['./content-global.component.css']
})
export class ContentGlobalComponent {
  isDropdownOpen: boolean = false; // Estado del menú desplegable "Practicas"
  isSecondDropdownOpen: boolean = false; // Estado del menú desplegable "Gráficas"
  isThirdDropdownOpen: boolean = false; // Estado del menú desplegable "Tablas"

  toggleDropdown(event: Event): void {
    event.stopPropagation(); // Evitar que el evento se propague
    this.closeAllDropdowns(); // Cerrar otros menús desplegables
    this.isDropdownOpen = !this.isDropdownOpen; // Alternar el estado del menú "Practicas"
  }

  toggleSecondDropdown(event: Event): void {
    event.stopPropagation(); // Evitar que el evento se propague
    this.closeAllDropdowns(); // Cerrar otros menús desplegables
    this.isSecondDropdownOpen = !this.isSecondDropdownOpen; // Alternar el estado del menú "Gráficas"
  }

  toggleThirdDropdown(event: Event): void {
    event.stopPropagation(); // Evitar que el evento se propague
    this.closeAllDropdowns(); // Cerrar otros menús desplegables
    this.isThirdDropdownOpen = !this.isThirdDropdownOpen; // Alternar el estado del menú "Tablas"
  }

  closeAllDropdowns(): void {
    // Cerrar todos los menús desplegables
    this.isDropdownOpen = false;
    this.isSecondDropdownOpen = false;
    this.isThirdDropdownOpen = false;
  }
}