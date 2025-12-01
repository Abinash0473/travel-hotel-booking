import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private BASE_URL = 'http://localhost:5000/api/hotels';

  constructor(private http: HttpClient) {}

  getHotels() {
    return this.http.get<any[]>(this.BASE_URL);
  }
}
