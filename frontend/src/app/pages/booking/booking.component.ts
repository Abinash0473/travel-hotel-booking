import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {
  hotelId = '';
  checkIn = '';
  checkOut = '';
  message = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hotelId = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.bookingService
      .bookHotel({ hotelId: this.hotelId, checkIn: this.checkIn, checkOut: this.checkOut })
      .subscribe({
        next: () => {
          this.message = 'Booking successful!';
          this.router.navigate(['/hotels']);
        },
        error: (err) => {
          this.error = err.error?.msg || 'Booking failed. Please login first.';
        }
      });
  }
}
