import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'https://localhost:5001/api/client';  // URL del API

  constructor(private http: HttpClient) {}

  getClientes(pageNumber: number, pageSize: number): Observable<any> {
    const url = `${this.apiUrl}/linq?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return this.http.get<any>(url);
  }
}