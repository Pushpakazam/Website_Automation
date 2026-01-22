const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { Kazam_ZipPage } = require('../pages/Kazam_ZipPage');

test.describe('Kazam Zip Mini – Single Session (One Browser)', () => {
  let browserContext;
  let page;
  let home;
  let zip;

  // 🔹 Open browser & module ONLY ONCE
  test.beforeAll(async ({ browser }) => {
    browserContext = await browser.newContext();
    page = await browserContext.newPage();

    home = new HomePage(page);
    zip = new Kazam_ZipPage(page);

    await home.openWebsite();
    await home.acceptCookiesIfPresent();
    await home.selectModule('Kazam Zip');
  });

  // 🔹 After every test, come back to Zip page
  test.afterEach(async () => {
    await page.goto('https://kazam.energy/');
    await home.selectModule('Kazam Zip');
  });

  // 🔹 Close browser ONLY ONCE
  test.afterAll(async () => {
    await browserContext.close();
  });

  test('Zip_mini Book a charger', async () => {
    await zip.bookACharger();
  });

  test('Zip_mini Enquire Now', async () => {
    await zip.enquireNow();
  });

  test('Zip_mini Download Specs', async () => {
    await zip.downloadSpecs();
  });

  test('Zip_mini Get in Touch (top)', async () => {
    await zip.getInTouch(0);
  });

  test('Zip_mini Get in Touch (bottom)', async () => {
    await zip.getInTouch(1);
  });

  test('Request a Charger (with emergency stop)', async () => {
    await zip.requestWithEmergencyStop();
  });

  test('Request a Charger (without emergency stop)', async () => {
    await zip.requestWithoutEmergencyStop();
  });

  test('Zip_mini Book Your Charger', async () => {
    await zip.bookACharger();
  });

  test('two, Three, Four wheelers', async () => {
    await zip.hoverWheelers();
  });

  test('Zip_mini Get Zip Mini', async () => {
    await zip.getZipMini();
  });
});

