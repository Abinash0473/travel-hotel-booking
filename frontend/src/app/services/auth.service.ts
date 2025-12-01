import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private BASE_URL = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<{ token: string }>(`${this.BASE_URL}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.BASE_URL}/register`, data);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
