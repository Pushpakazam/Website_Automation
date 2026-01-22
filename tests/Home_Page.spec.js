const { test } = require('@playwright/test');
const { HomePageValidationPage } = require('../pages/HomePageValidationPage');

test.describe('Home Page – Header, Footer & Navigation Validation', () => {
  let context;
  let page;
  let homeValidation;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    homeValidation = new HomePageValidationPage(page);

    await page.goto('https://kazam.energy/');
    await homeValidation.acceptCookies();
  });

  test.afterAll(async () => {
    await context.close();
  });

  test('Home Page – Contact / Get in Touch form', async () => {
    await homeValidation.submitContactForm();
  });

  test('Home Page – Header navigation validation', async () => {
    await homeValidation.validateHeaderNavigation();
  });

  test('Home Page – Footer links validation', async () => {
    await homeValidation.validateFooterLinks();
  });

  test('Home Page – Social media icons validation', async () => {
    await homeValidation.validateSocialIcons();
  });
});


  
    


