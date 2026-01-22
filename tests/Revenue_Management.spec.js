const { test,expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { RevenueManagementPage } = require('../pages/RevenueManagementPage');

test.describe('Revenue Management – Single Session Flow', () => {
  let page;
  let home;
  let rm;

  const downloadPath = './downloads';

  const formData = {
    name: 'pushpa shivanna',
    email: 'pushpa@kazam.in',
    phone: '6363360267',
    organization: 'Kazam',
    message: 'Manage EV charging',
    otherMessage: 'I want to connect with sales team'
  };

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({ acceptDownloads: true });
    page = await context.newPage();

    home = new HomePage(page);
    rm = new RevenueManagementPage(page);

    await home.openWebsite();
    await home.acceptCookiesIfPresent();
    await home.selectModule('Revenue Management System');
  });

  test('RM – Book a Demo (Top)', async () => {
    await rm.bookDemo(0, formData);
  });

  test('RM – Know More', async () => {
    await rm.knowMore({ ...formData, message: 'Request Charger' });
  });

  test('RM – Generate Report', async () => {
    await rm.generateReport({ ...formData, message: 'Others' });
  });

  test('RM – Download Report (Oil & Gas Major)', async () => {
    await rm.downloadReport('Oil & Gas Major (Public Sector)', downloadPath,0);
  });

  test('RM – Download Report (CPO – Time-of-Day Tariff Pilot)', async () => {
    await rm.downloadReport('CPO – Time-of-Day Tariff Pilot', downloadPath,1);
  });

  test('RM – Download Report (Quick-Commerce Fleet Operator)', async () => {
    await rm.downloadReport('Quick-Commerce Fleet Operator', downloadPath,2);
  });

  test('RM – Talk To Expert', async () => {
    await rm.talkToExpert({ ...formData, message: 'Set up EV charging' });
  });

  test('RM – Book a Demo (Bottom)', async () => {
    await rm.bookDemo(1, { ...formData, message: 'Have a consultation' });
  });

  test('RM – Feature Content Validation', async () => {
    await rm.validateFeature(
      'Anomaly Detection',
      'Automatically detect and correct irregularities during charging sessions to ensure accurate data and smooth operations.'
    );
    await rm.validateFeature(
      'Split Payments',
      'Automate payments according to contracts across chargers, hosts, and organisations.'
    );
    await rm.validateFeature(
      'Coupons and Subscriptions',
      'Retain customers with coupons and subscription models.'
    );
  });
});



