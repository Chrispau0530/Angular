import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-primera',
  standalone: true,
  imports: [DataTablesModule],
  templateUrl: './primera.component.html',
  styleUrls: ['./primera.component.css']
})
export class PrimeraComponent implements OnInit {
  dtOptions: any = {}; 

  ngOnInit(): void {
    this.dtOptions = {
      paging: true, // Habilitar paginación
      searching: true, // Habilitar búsqueda
      ordering: true, // Permitir ordenamiento
      pageLength: 5, // Filas por página
      lengthMenu: [5, 10, 25, 50], // Opciones de filas por página
      language: {
        search: 'Buscar:',
        lengthMenu: 'Mostrar _MENU_ registros por página',
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
        paginate: {
          first: 'Primero',
          last: 'Último',
          next: 'Siguiente',
          previous: 'Anterior'
        }
      }
    };
  }
}