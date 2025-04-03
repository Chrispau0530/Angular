import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css']
})
export class SegundaComponent implements OnInit {
  dtOptions: any = {};
  players = [
    { id: 0, name: 'Randy Livingston', team: 'HOU', age: 22, college: 'Louisiana State', country: 'USA', draftYear: 1996, points: 3.9, rebounds: 1.5, assists: 2.4 },
    { id: 1, name: 'Gaylon Nickerson', team: 'WAS', age: 28, college: 'Northwestern Oklahoma', country: 'USA', draftYear: 1994, points: 3.8, rebounds: 1.3, assists: 0.3 },
    { id: 2, name: 'George Lynch', team: 'VAN', age: 26, college: 'North Carolina', country: 'USA', draftYear: 1993, points: 8.3, rebounds: 6.4, assists: 1.9 },
    { id: 3, name: 'John Doe', team: 'NYK', age: 25, college: 'Fake University', country: 'USA', draftYear: 1995, points: 12.5, rebounds: 5.0, assists: 4.2 },
    { id: 4, name: 'Michael Smith', team: 'CHI', age: 27, college: 'Basketball Academy', country: 'Canada', draftYear: 1993, points: 9.8, rebounds: 6.7, assists: 3.1 },
    { id: 5, name: 'James Carter', team: 'LAL', age: 24, college: 'UCLA', country: 'USA', draftYear: 1996, points: 15.3, rebounds: 6.0, assists: 4.0 },
    { id: 6, name: 'Daniel Johnson', team: 'BOS', age: 23, college: 'Georgetown', country: 'USA', draftYear: 1996, points: 10.8, rebounds: 4.7, assists: 3.2 },
    { id: 7, name: 'Anthony Williams', team: 'PHX', age: 29, college: 'Michigan State', country: 'USA', draftYear: 1992, points: 16.4, rebounds: 9.2, assists: 1.7 },
    { id: 8, name: 'Trevor Davis', team: 'POR', age: 25, college: 'Kentucky', country: 'USA', draftYear: 1995, points: 8.7, rebounds: 2.9, assists: 5.3 },
    { id: 9, name: 'Marcus Brown', team: 'SAC', age: 26, college: 'Kansas', country: 'USA', draftYear: 1994, points: 11.2, rebounds: 3.8, assists: 2.6 },
    { id: 10, name: 'Ricardo Martinez', team: 'MIA', age: 24, college: 'Arizona', country: 'Mexico', draftYear: 1996, points: 7.5, rebounds: 1.8, assists: 5.9 },
    { id: 11, name: 'Andre Thompson', team: 'DET', age: 27, college: 'Duke', country: 'USA', draftYear: 1993, points: 12.7, rebounds: 7.8, assists: 1.2 },
    { id: 12, name: 'Kevin Jackson', team: 'ATL', age: 24, college: 'UNLV', country: 'USA', draftYear: 1995, points: 13.4, rebounds: 3.2, assists: 2.8 },
    { id: 13, name: 'Robert Chen', team: 'GSW', age: 23, college: 'Stanford', country: 'USA', draftYear: 1996, points: 9.3, rebounds: 5.6, assists: 1.4 },
    { id: 14, name: 'Samuel Wilson', team: 'DAL', age: 30, college: 'Cincinnati', country: 'USA', draftYear: 1991, points: 10.2, rebounds: 4.1, assists: 6.7 },
    { id: 15, name: 'David O\'Connor', team: 'NJN', age: 22, college: 'Syracuse', country: 'Ireland', draftYear: 1996, points: 14.1, rebounds: 8.3, assists: 1.1 }
  ];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
}
