import { NgCliCustomQuickstartPage } from './app.po';

describe('ng-cli-custom-quickstart App', function() {
  let page: NgCliCustomQuickstartPage;

  beforeEach(() => {
    page = new NgCliCustomQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
