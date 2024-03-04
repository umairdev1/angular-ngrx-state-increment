import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './states/counter/counte.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
  ],
};
