import { KarubaHelperPage } from './app.po';

describe('karuba-helper App', function() {
  let page: KarubaHelperPage;

  beforeEach(() => {
    page = new KarubaHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('karuba-helper works!');
  });
});
