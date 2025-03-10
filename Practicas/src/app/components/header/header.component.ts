import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;
  isDropdownOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenusOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    const isButtonClick = targetElement.closest('button');
    const isMenuContent = targetElement.closest('.absolute');

    if (!isButtonClick && !isMenuContent) {
      this.isOpen = false;
      this.isDropdownOpen = false;
    }
  }
}
