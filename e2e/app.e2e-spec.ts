import { TravlerProjectsPage } from './app.po';

describe('travler-projects App', () => {
  let page: TravlerProjectsPage;

  beforeEach(() => {
    page = new TravlerProjectsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
