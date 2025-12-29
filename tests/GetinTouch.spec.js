const {test,expect} = require('@playwright/test');
test('GetInTouch form',async({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://kazam.energy/');
await page.getByText('Get in Touch').nth(1).click();
const acceptCookies = page.getByRole('button', { name: 'Accept all cookies' });
if (await acceptCookies.isVisible()) {
  await acceptCookies.click();
}
const contactForm = page.getByRole('heading', { name: 'Contact Us' }).locator('..');
await contactForm.locator('#name').fill('Pushpa');
await contactForm.locator('#name').fill('Pushpa');
await contactForm.locator('#email').fill('pushpa@gmail.com');
await contactForm.locator('#org_name').fill('TCS');
await contactForm.locator('#phone').fill('6363360267');
const iwantto = page.locator('#message:visible');
await iwantto.selectOption('Manage EV Fleet');
await contactForm.locator('input[type="checkbox"]').first().check();
await page.getByRole('button',{name : 'Submit'}).click();
await page.waitForSelector('text=We will get in touch with you soon.');
await expect(page.getByText('We will get in touch with you soon.')).toBeVisible();
});

