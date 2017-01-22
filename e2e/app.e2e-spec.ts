import { SurfSnapWebProjectPage } from './app.po';

describe('surf-snap-web-project App', function() {
  let page: SurfSnapWebProjectPage;

  beforeEach(() => {
    page = new SurfSnapWebProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
