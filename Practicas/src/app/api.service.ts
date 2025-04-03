import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:3000/allSessions'; // Cambia esta URL por la de tu API

  constructor(private http: HttpClient) {}

  getAllSessions(): Observable<any> {
    console.log('Realizando solicitud GET a:', this.apiUrl);
    return this.http.get<any>(this.apiUrl);
  }

  // Get active sessions
  getActiveSessions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/activeSessions`);
  }

  // Add more methods as needed for your API endpoints
}