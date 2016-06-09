import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { KarubaHelperAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(KarubaHelperAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://karubahelper.firebaseio.com')
]);