import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { KarubaHelperAppComponent } from '../app/karuba-helper.component';

beforeEachProviders(() => [KarubaHelperAppComponent]);

describe('App: KarubaHelper', () => {
  it('should create the app',
      inject([KarubaHelperAppComponent], (app: KarubaHelperAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'karuba-helper works!\'',
      inject([KarubaHelperAppComponent], (app: KarubaHelperAppComponent) => {
    expect(app.title).toEqual('karuba-helper works!');
  }));
});
