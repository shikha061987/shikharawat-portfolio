import { register } from 'swiper/element/bundle';
import { provideHttpClient } from '@angular/common/http';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { AppComponent } from './app/app.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

register();

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()  // <-- replaces HttpClientModule
  ]
});

  AOS.init();




