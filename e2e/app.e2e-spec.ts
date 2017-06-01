import { EventManagerPluginPage } from './app.po';

describe('event-manager-plugin App', () => {
  let page: EventManagerPluginPage;

  beforeEach(() => {
    page = new EventManagerPluginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
