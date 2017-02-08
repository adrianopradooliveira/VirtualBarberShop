import { VirtualBarberShopPage } from './app.po';

describe('virtual-barber-shop App', function() {
  let page: VirtualBarberShopPage;

  beforeEach(() => {
    page = new VirtualBarberShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
