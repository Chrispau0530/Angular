import { Component, OnInit} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';  // Ya importado correctamente
import { Config } from 'datatables.net';
@Component({
  selector: 'app-primera',
  standalone: true,  // Si usas un componente standalone, marca el componente como standalone
  imports: [CommonModule, DataTablesModule],  // Importa el módulo DataTables
  templateUrl: './primera.component.html',
  styleUrls: ['./primera.component.css']
})
export class PrimeraComponent implements OnInit {
  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
