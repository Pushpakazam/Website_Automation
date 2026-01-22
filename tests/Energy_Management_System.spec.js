const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { EnergyManagementSystemPage } = require('../pages/Energy_Management_SystemPage');

test.describe('Energy Management System – Single Session Flow', () => {
  let context, page, home, ems;

  // 🔹 Open browser + EMS module ONCE
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    home = new HomePage(page);
    ems = new EnergyManagementSystemPage(page);

    await home.openWebsite();
    await home.acceptCookiesIfPresent();
    await home.selectModule('Energy Management System');
  });

  // 🔹 Reset to EMS page after each test
  test.afterEach(async () => {
    await page.goto('https://kazam.energy/');
    await home.selectModule('Energy Management System');
  });

  // 🔹 Close browser ONCE
  test.afterAll(async () => {
    await context.close();
  });

  test('EMS – Book a Demo (Top)', async () => {
    await ems.bookDemo(0, 'Set up EV charging');
  });

  test('EMS – Know More (0)', async () => {
    await ems.knowMore(0, 'Manage EV charging');
  });

  test('EMS – Know More (1)', async () => {
    await ems.knowMore(1, 'Manage EV Fleet');
  });

  test('EMS – Know More (2)', async () => {
    await ems.knowMore(2, 'Implement end-to-end e-mobility solutions');
  });

  test('EMS – Know More (3)', async () => {
    await ems.knowMore(3, 'Have a consultation');
  });

  test('EMS – Know More (Last)', async () => {
    await ems.knowMore(-1, 'Schedule a demo');
  });

  test('EMS – Book a Demo (Bottom)', async () => {
    await ems.bookDemo(-1, 'Request Charger');
  });

  test('EMS – Smart Modules Hover', async () => {
    await ems.hoverSmartModules();
  });

  test('EMS – KPIs', async () => {
    await ems.openKPIs();
  });
});
