import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HotelListComponent } from './pages/hotel-list/hotel-list.component';
import { BookingComponent } from './pages/booking/booking.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { FormsModule } from '@angular/forms';

import { hotelReducer } from './store/reducers/hotel.reducer';
import { HotelEffects } from './store/effects/hotel.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HotelListComponent,
    BookingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ hotelState: hotelReducer }),
    EffectsModule.forRoot([HotelEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
