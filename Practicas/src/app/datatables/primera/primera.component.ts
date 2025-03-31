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
  imports: [CommonModule, DataTablesModule, HttpClientModule],
  templateUrl: './primera.component.html',
  styleUrls: ['./primera.component.css']
})
export class PrimeraComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  
  dtOptions: any = {
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
        console.log('Datos recibidos:', data);
        if (Array.isArray(data)) {
          this.sessions = data;
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
      this.sessions = data;
      if (this.dtElement && this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: Api) => {
          dtInstance.clear().rows.add(this.sessions).draw();
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }
}
