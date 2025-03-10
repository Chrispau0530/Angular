import { Routes } from '@angular/router';
import { Practica02Component } from './Practicas/practica02/practica02.component';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./components/content-global/content-global.component').then(m=>m.ContentGlobalComponent),
    children: [
      {
        path: 'practica01',
        loadComponent: () => import('./Practicas/practica01/practica01.component').then(m => m.Practica01Component),

      },
      {
        path: 'practica02',
        loadComponent: () => import('./Practicas/practica02/practica02.component').then(m =>Practica02Component),
      }
    ]
  }
];
