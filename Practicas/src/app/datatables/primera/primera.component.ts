import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ApiService } from '../../api.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { Api } from 'datatables.net';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-primera',
  standalone: true,
  imports: [CommonModule, DataTablesModule,HttpClientModule],
  templateUrl: './primera.component.html',
  styleUrls: ['./primera.component.css']
})
export class PrimeraComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  
  dtOptions: any = {  // Use any type instead of DataTables.Settings
    pagingType: 'full_numbers',
    pageLength: 10,
    responsive: true
  };
  
  sessions: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  refreshInterval: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: true
    };
    
    this.loadSessions();
    
    // Refresh data every 30 seconds
    this.refreshInterval = setInterval(() => {
      this.reloadData();
    }, 30000);
  }

  loadSessions() {
    this.apiService.getAllSessions().subscribe(
      (data) => {
        console.log('Datos recibidos:', data); // Añade esto para depurar
        if (data && data.allSessions) {
          this.sessions = data.allSessions;
          // Trigger DataTables to redraw the table
          this.dtTrigger.next(null);
        } else {
          console.error('Formato de respuesta inválido:', data);
        }
      },
      (error) => {
        console.error('Error al cargar sesiones:', error);
      }
    );
  }

  reloadData() {
    this.apiService.getAllSessions().subscribe(data => {
      this.sessions = data.allSessions;
      // Refresh the datatable
      if (this.dtElement && this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: Api) => {
          dtInstance.clear().rows.add(this.sessions).draw();
        });
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.dtTrigger.unsubscribe();
    // Clear the interval when component is destroyed
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }
}