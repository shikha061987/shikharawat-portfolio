import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(NgParticlesModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

