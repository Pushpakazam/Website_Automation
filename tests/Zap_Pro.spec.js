const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ZapProPage } = require('../pages/ZapProPage');
test.describe('Zap Pro – Single Session Flow', () => {
  let home;
  let zap;
  let context;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({ acceptDownloads: true });
    const page = await context.newPage();

    home = new HomePage(page);
    zap = new ZapProPage(page);

    await home.openWebsite();
    await home.acceptCookiesIfPresent();
    await home.selectModule('Kazam Zap Pro');
  });

  test.afterAll(async () => {
    await context.close();
  });

  test('Book a Charger', async () => {
    await zap.bookACharger({
      name: 'pushpa shivanna',
      email: 'pushpa@kazam.in',
      phone: '6363360267',
      organization: 'Kazam',
      message: 'Implement end-to-end e-mobility solutions'
    });
  });

  test('Download Specs', async () => {
    await zap.downloadSpecs(
      {
        name: 'pushpa',
        email: 'pushpashivanna789@gmail.com',
        phone: '9900968219',
        organization: 'tcs'
      },
      './downloads'
    );
  });

  test('Compare Chargers', async () => {
    await zap.compareChargers(
      {
        name: 'pushpa',
        email: 'pushpashivanna789@gmail.com',
        phone: '9900968219',
        organization: 'tcs'
      },
      './downloads'
    );
  });

  test('Request Charger', async () => {
    await zap.requestDualGunCharger({
      name: 'pushpa',
      email: 'pushpa@kazam.in',
      phone: '6363360267',
      organization: 'Kazam'
    });
  });

  test('Book a Demo', async () => {
    await zap.bookADemo({
      name: 'pushpa shivanna',
      email: 'pushpa@kazam.in',
      phone: '6363360267',
      organization: 'Kazam',
      message: 'Manage EV Fleet'
    });
  });

  // Uncomment when ready
  // test('Zap it', async () => {
  //   await zap.Proit({
  //     name: 'pushpa shivanna',
  //     email: 'pushpa@kazam.in',
  //     phone: '6363360267',
  //     organization: 'Kazam',
  //     message: 'Manage EV Fleet'
  //   });
  // });
});
