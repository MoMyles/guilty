import { GuiltyPage } from './app.po';

describe('guilty App', () => {
  let page: GuiltyPage;

  beforeEach(() => {
    page = new GuiltyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
