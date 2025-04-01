import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';
@Component({
  selector: 'app-segunda',
  imports: [],
  templateUrl: './segunda.component.html',
  styleUrl: './segunda.component.css'
})
export class SegundaComponent  implements OnInit{
  dtOptions: any = {
    pagingType: 'full_numbers',
    pageLength: 10,
    responsive: true
  };
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
