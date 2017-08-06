import { DemoProjPage } from './app.po';

describe('demo-proj App', () => {
  let page: DemoProjPage;

  beforeEach(() => {
    page = new DemoProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
