import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SiderbarComponent } from '../siderbar/siderbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-content-global',
  imports: [CommonModule,SiderbarComponent,RouterOutlet,HeaderComponent],
  templateUrl: './content-global.component.html',
  styleUrl: './content-global.component.css'
})
export class ContentGlobalComponent {

}
