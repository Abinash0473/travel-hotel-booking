import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private BASE_URL = 'http://localhost:5000/api/bookings';

  constructor(private http: HttpClient, private authService: AuthService) {}

  bookHotel(data: any) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'x-auth-token': token || ''
    });
    return this.http.post(this.BASE_URL, data, { headers });
  }
}
