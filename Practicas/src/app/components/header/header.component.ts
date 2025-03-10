import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOutside(event: Event) {
    const targetElement = event.target as HTMLElement;
    const isButtonClick = targetElement.closest('button');
    const isMenuContent = targetElement.closest('.absolute');

    if (this.isOpen && !isButtonClick && !isMenuContent) {
      this.isOpen = false;
    }
  }
}
