import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SiderbarComponent } from '../siderbar/siderbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from "../content/content.component";
@Component({
  selector: 'app-content-global',
  imports: [CommonModule, SiderbarComponent, RouterOutlet, HeaderComponent, ContentComponent],
  templateUrl: './content-global.component.html',
  styleUrl: './content-global.component.css'
})
export   class ContentGlobalComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
