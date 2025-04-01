import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ApiService } from '../../api.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tercera',
  imports: [CommonModule, DataTablesModule, HttpClientModule],
  templateUrl: './tercera.component.html',
  styleUrl: './tercera.component.css'
})
export class TerceraComponent  implements OnInit, OnDestroy{

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  dtOptions: any = {
    pagingType: 'full_numbers',
    pageLength: 5,
    responsive: true,
    autoWidth: false,  // Importante para controlar el ancho
    scrollX: true,     // Permitir desplazamiento horizontal
    language: {
      processing: "Procesando...",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ registros",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      infoEmpty: "Mostrando 0 a 0 de 0 registros",
      infoFiltered: "(filtrado de _MAX_ registros en total)",
      zeroRecords: "No se encontraron registros coincidentes",
      emptyTable: "No hay datos disponibles en la tabla",
      paginate: {
        first: "Primero",
        previous: "Anterior",
        next: "Siguiente",
        last: "Último"
      }
    },
    dom: 'Bfrtip',  // Mostrar botones y filtros
  };
  
  sessions: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  isDtInitialized: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('El componente PrimeraComponent ha sido inicializado.');
    this.loadSessions();
  }

  loadSessions() {
    this.apiService.getAllSessions().subscribe({
      next: (response) => {
        console.log('Respuesta completa de la API:', response);
  
        if (response && response.allSessions && Array.isArray(response.allSessions)) {
          this.sessions = response.allSessions;
          console.log('Datos procesados:', this.sessions);
  
          // Importante: comprueba si la tabla ya ha sido inicializada antes
          if (this.isDtInitialized) {
            this.rerender();
          } else {
            this.isDtInitialized = true;
            // Asegúrate de que hay un pequeño delay antes de inicializar
            setTimeout(() => {
              this.dtTrigger.next(null);
            }, 100);
          }
        } else {
          console.error('Formato de respuesta inválido:', response);
        }
      },
      error: (error) => {
        console.error('Error al cargar sesiones:', error);
      }
    });
  }

  reloadData() {
    this.apiService.getAllSessions().subscribe({
      next: (response) => {
        if (response && response.allSessions && Array.isArray(response.allSessions)) {
          this.sessions = response.allSessions;
          console.log('Datos recargados:', this.sessions);
          
          if (this.isDtInitialized) {
            this.rerender();
          } else {
            this.isDtInitialized = true;
            setTimeout(() => {
              this.dtTrigger.next(null);
            }, 100);
          }
        } else {
          console.error('Formato de respuesta inválido:', response);
        }
      },
      error: (error) => {
        console.error('Error al recargar los datos:', error);
      }
    });
  }

  // Método corregido para volver a renderizar la tabla
  rerender(): void {
    if (this.dtElement && this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: any) => {
        console.log('Destruyendo la tabla primero');
        
        // Destruir la tabla primero
        dtInstance.destroy();
        
        // Pequeño delay para asegurar que la destrucción se completó
        setTimeout(() => {
          console.log('Volviendo a renderizar la tabla');
          this.dtTrigger.next(null);
        }, 200);
      }).catch(err => {
        console.error('Error al renderizar la tabla:', err);
      });
    } else {
      console.warn('dtElement no está disponible');
      // Si por alguna razón dtElement no está disponible, intenta inicializar
      setTimeout(() => {
        this.dtTrigger.next(null);
      }, 100);
    }
  }

  ngOnDestroy(): void {
    // Cancela la suscripción y limpia los intervalos
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    
    // Asegúrate de que el trigger está cerrado correctamente
    if (this.dtTrigger && !this.dtTrigger.closed) {
      this.dtTrigger.unsubscribe();
    }
    
    // Asegúrate de destruir la tabla si existe
    if (this.dtElement && this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: any) => {
        dtInstance.destroy();
      });
    }
  }
  
  // Agrega el refreshInterval si lo vas a usar
  refreshInterval: any;
}
