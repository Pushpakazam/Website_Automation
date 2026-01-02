const { test,expect } = require('@playwright/test');

test.describe('Home Page – Header & Footer Navigation', () => {

  test('HomePage_Header', async ({ page }) => {

    await page.goto('https://kazam.energy/', {
  waitUntil: 'domcontentloaded'
});

    const acceptCookies = page.getByRole('button', { name: 'Accept all cookies' });
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click();
    }

    // ===== Products =====
    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('Kazam Zip', { exact: true }).nth(0).click();

    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('Kazam Zip Pro', { exact: true }).click();

    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('Kazam Zap Pro', { exact: true }).click();

    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('Kazam Zoom', { exact: true }).nth(0).click();

    // ===== Software =====
    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('Charging Management Solution', { exact: true }).click();

    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('EV Leasing Management', { exact: true }).nth(0).click();

    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('Battery Swapping Management Solution', { exact: true }).click();

    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('EV Mobile App', { exact: true }).nth(0).click();

    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('Revenue Management Solution', { exact: true }).click();

    await page.getByText('Products', { exact: true }).hover();
    await page.getByText('Charger Health Checkup', { exact: true }).nth(0).click();

    // ===== Solutions =====
    await page.getByRole('button', { name: 'Solutions' }).hover();
    await page.getByText('P2P Energy Trading Platform', { exact: true }).nth(0).click();

    await page.getByRole('button', { name: 'Solutions' }).hover();
    await page.getByText('Commercial Buildings', { exact: true }).nth(0).click();

    await page.getByRole('button', { name: 'Solutions' }).hover();
    await page.getByText('Home Charging', { exact: true }).click();

    await page.getByRole('button', { name: 'Solutions' }).hover();
    await page.getByText('RWAs', { exact: true }).nth(0).click();

    await page.getByRole('button', { name: 'Solutions' }).hover();
    await page.getByText('Construction Companies', { exact: true }).nth(0).click();

    await page.getByRole('button', { name: 'Solutions' }).hover();
    await page.getByText('Petrol Pumps', { exact: true }).click();

    // ===== Resources =====
    await page.getByText('Resources', { exact: true }).hover();
    await page.getByText('Blog', { exact: true }).click();

    await page.getByText('Resources', { exact: true }).hover();
    await page.getByText('Whitepaper', { exact: true }).click();

    await page.getByText('About Us', { exact: true }).hover();
  });


  test('HomePage_Footerlinks_Navigation', async ({ page }) => {

       await page.goto('https://kazam.energy/', {
  waitUntil: 'domcontentloaded'
});

    const acceptCookies = page.getByRole('button', { name: 'Accept all cookies' });
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click();
    }

    // ===== Footer checks =====
    await page.getByRole('link', { name: 'P2P Energy Trading Platform' }).click();
    await page.goBack();

    await page.getByRole('link', { name: 'Commercial Buildings' }).click();
    await page.goBack();

    await page.getByRole('link', { name: 'Zap Pro' }).click();
    await page.goBack();

    await page.getByRole('link', { name: 'CMS' }).click();
    await page.goBack();

    await page.getByRole('link', { name: 'Privacy Policy' }).click();
    await page.goBack();

    await page.getByRole('link', { name: 'Terms of Service' }).click();
    await page.goBack();
  });

});


