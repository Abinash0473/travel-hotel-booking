import { createAction, props } from '@ngrx/store';

export const loadHotels = createAction('[Hotel] Load Hotels');

export const loadHotelsSuccess = createAction(
  '[Hotel] Load Hotels Success',
  props<{ hotels: any[] }>()
);

export const loadHotelsFailure = createAction(
  '[Hotel] Load Hotels Failure',
  props<{ error: any }>()
);
