import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HotelService } from '../../services/hotel.service';
import { loadHotels, loadHotelsSuccess, loadHotelsFailure } from '../actions/hotel.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class HotelEffects {
  loadHotels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHotels),
      mergeMap(() =>
        this.hotelService.getHotels().pipe(
          map((hotels) => loadHotelsSuccess({ hotels })),
          catchError((err) => of(loadHotelsFailure({ error: err })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private hotelService: HotelService) {}
}
