import { createReducer, on } from '@ngrx/store';
import { loadHotelsSuccess } from '../actions/hotel.actions';

export interface HotelState {
  hotels: any[];
}

export const initialState: HotelState = {
  hotels: []
};

export const hotelReducer = createReducer(
  initialState,
  on(loadHotelsSuccess, (state, { hotels }) => ({ ...state, hotels }))
);
