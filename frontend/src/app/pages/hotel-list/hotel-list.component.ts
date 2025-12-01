import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { loadHotels } from '../../store/actions/hotel.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html'
})
export class HotelListComponent implements OnInit {
  hotels$!: Observable<any[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadHotels());
    this.hotels$ = this.store.select((state) => state.hotelState.hotels);
  }
}
