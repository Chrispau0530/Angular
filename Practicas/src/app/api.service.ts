import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Your API base URL from the code you shared

  constructor(private http: HttpClient) { }

  // Get all sessions
  getAllSessions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allSessions`);
  }

  // Get active sessions
  getActiveSessions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/activeSessions`);
  }

  // Add more methods as needed for your API endpoints
}