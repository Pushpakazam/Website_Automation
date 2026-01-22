const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { VehicleDepotManagementPage } = require('../pages/Vehicle_Depot_ManagementPage');

test.describe('Vehicle Depot Management – Single Session Flow', () => {
  let context, page, home, vdm;

  // 🔹 Open browser + VDM module ONCE
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    home = new HomePage(page);
    vdm = new VehicleDepotManagementPage(page);

    await home.openWebsite();
    await home.acceptCookiesIfPresent();
    await home.selectModule('Vehicle Depot Management');
  });

  // 🔹 Reset module page after each test
  test.afterEach(async () => {
    await page.goto('https://kazam.energy/');
    await home.selectModule('Vehicle Depot Management');
  });

  // 🔹 Close browser ONCE
  test.afterAll(async () => {
    await context.close();
  });

  test('VDM – Book a Demo (Top)', async () => {
    await vdm.bookDemo(0);
  });

  test('VDM – Know More (0)', async () => {
    await vdm.knowMore(0);
  });

  test('VDM – Know More (1)', async () => {
    await vdm.knowMore(1);
  });

  test('VDM – Know More (Last)', async () => {
    await vdm.knowMore(-1);
  });

  test('VDM – Book a Demo (Bottom)', async () => {
    await vdm.bookDemo(-1);
  });

  test('VDM – Smart Modules Hover', async () => {
    await vdm.hoverSmartModules();
  });

  test('VDM – Automate Slider', async () => {
    await vdm.automateSlider();
  });
});
