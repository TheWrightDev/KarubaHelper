export class KarubaHelperPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('karuba-helper-app h1')).getText();
  }
}
