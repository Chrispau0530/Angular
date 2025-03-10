import { Component } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  imports: [],
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css'
})
export class SiderbarComponent {
  isSidebarVisible: boolean = true;

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
