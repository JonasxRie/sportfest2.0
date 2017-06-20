import { SportfestPage } from './app.po';

describe('sportfest App', () => {
  let page: SportfestPage;

  beforeEach(() => {
    page = new SportfestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
