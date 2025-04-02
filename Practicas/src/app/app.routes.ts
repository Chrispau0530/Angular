import { Routes } from '@angular/router';
import { Practica02Component } from './Practicas/practica02/practica02.component';
import { ContentComponent } from './components/content/content.component';
import { Practica03Component } from './Practicas/practica03/practica03.component';
import { Practica05Component } from './Practicas/practica05/practica05.component';
import { Practica04Component } from './Practicas/practica04/practica04.component';
import { Practica06Component } from './Practicas/practica06/practica06.component';
import { Practica07Component } from './Practicas/practica07/practica07.component';
import { Practica08Component } from './Practicas/practica08/practica08.component';
import { Practica09Component } from './Practicas/practica09/practica09.component';
import { Practica10Component } from './Practicas/practica10/practica10.component';
import { Practica11Component } from './Practicas/practica11/practica11.component';

export const routes: Routes = [
  {
   path: "",
  //  loadComponent:()=> import ('./components/login/login.component').then(m => m.LoginComponent),
    
    children: [
      {
        path: 'practica01',
        loadComponent: () => import('./Practicas/practica01/practica01.component').then(m => m.Practica01Component),

      },
      {
        path: 'practica02',
        loadComponent: () => import('./Practicas/practica02/practica02.component').then(m =>Practica02Component),
      },
      {
        path: 'practica03',
        loadComponent: () => import('./Practicas/practica03/practica03.component').then(m =>Practica03Component),
      },
      {
        path: 'practica04',
        loadComponent: () => import('./Practicas/practica04/practica04.component').then(m => Practica04Component),

      },
      {
        path: 'practica05',
        loadComponent: () => import('./Practicas/practica05/practica05.component').then(m =>Practica05Component),
      },
      {
        path: 'practica06',
        loadComponent: () => import('./Practicas/practica06/practica06.component').then(m =>Practica06Component),
      },
      {
        path: 'practica07',
        loadComponent: () => import('./Practicas/practica07/practica07.component').then(m => Practica07Component)

      },
      {
        path: 'practica08',
        loadComponent: () => import('./Practicas/practica08/practica08.component').then(m =>Practica08Component),
      },
      {
        path: 'practica09',
        loadComponent: () => import('./Practicas/practica09/practica09.component').then(m =>Practica09Component),
      },
      {
        path: 'practica10',
        loadComponent: () => import('./Practicas/practica10/practica10.component').then(m => Practica10Component),

      },
      {
        path: 'practica11',
        loadComponent: () => import('./Practicas/practica11/practica11.component').then(m =>Practica11Component),
      },
      {
        path: 'practica12',
        loadComponent: () => import('./components/content/content.component').then(m =>ContentComponent),
      },

    ]
  }
];
