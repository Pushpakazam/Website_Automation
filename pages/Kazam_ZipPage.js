const { expect } = require('@playwright/test');

class Kazam_ZipPage {
  constructor(page) {
    this.page = page;
  }

  async acceptCookies() {
    const acceptCookies = this.page.getByRole('button', { name: 'Accept all cookies' });
    if (await acceptCookies.isVisible().catch(() => false)) {
      await acceptCookies.click();
    }
  }

  async openZipMini() {
    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Kazam Zip', { exact: true }).nth(0).click();
  }

  async bookACharger() {
    await this.page.getByText('Book a Charger', { exact: true }).click();
    await this.page.getByLabel('Name', { exact: true }).fill('Pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#org_name').nth(1).fill('kazam');
    await this.page.locator('#phone').fill('9900968219');
    await this.page.locator('#message:visible')
      .selectOption('Implement end-to-end e-mobility solutions');
    await this.page.locator('#agreeToTerms').check();
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await expect(this.page.getByText('We will get in touch with you soon.')).toBeVisible();
  }

  async enquireNow() {
    await this.page.getByRole('button', { name: 'Enquire Now' }).click();
    await this.page.getByLabel('Name', { exact: true }).fill('Pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#org_name').nth(1).fill('kazam');
    await this.page.locator('#phone').fill('9900968219');
    await this.page.locator('#message:visible').selectOption('Set up EV charging');
    await this.page.locator('#agreeToTerms').check();
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await expect(this.page.getByText('We will get in touch with you soon.')).toBeVisible();
  }

  async downloadSpecs() {
    await this.page.getByText('Download Specs', { exact: true }).click();
    await this.page.locator('#name').fill('pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#phone').fill('9900968219');
    await this.page.getByLabel('Organization Name', { exact: true }).fill('kazam');
    await this.page.getByRole('button', { name: 'Download' });
  }

  async getInTouch(index = 0) {
    await this.page.getByRole('button', { name: 'Get in Touch' }).nth(index).click();
    await this.page.getByLabel('Name', { exact: true }).fill('Pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#org_name').nth(1).fill('kazam');
    await this.page.locator('#phone').fill('9900968219');
    await this.page.locator('#message:visible').selectOption('Set up EV charging');
    await this.page.locator('#agreeToTerms').check();
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await expect(this.page.getByText('We will get in touch with you soon.')).toBeVisible();
  }

  async requestWithEmergencyStop() {
    const year = this.page.getByRole('button', { name: '1 Year' });
    await year.click();
    await expect(year).toHaveAttribute('aria-pressed', 'true');

    await this.page.getByRole('button', { name: 'Aesthetics' }).click();
    await this.page.getByRole('button', { name: 'Yes' }).click();
    await this.page.getByRole('button', { name: 'Light Blue' }).click();

    await this.page.getByText('Request a Charger', { exact: true }).click();
    await this.page.locator('#name').fill('pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#phone').fill('9900968219');
    await this.page.getByLabel('Organisation *', { exact: true }).fill('kazam');
    await this.page.getByRole('button', { name: 'Submit Request' }).click();
  }

  async requestWithoutEmergencyStop() {
    const comboBtn = this.page.getByRole('button', { name: 'Combination (6/16A)' });
    await comboBtn.click();
    await expect(comboBtn).toHaveAttribute('aria-pressed', 'true');

    await this.page.getByRole('button', { name: 'IP64' }).click();
    await this.page.getByText('No', { exact: true }).last().click();
    await this.page.getByRole('button', { name: '5 Year' }).click();
    await this.page.getByRole('button', { name: 'RFID' }).click();
    await this.page.getByRole('button', { name: 'Aesthetics' }).click();
    await this.page.getByRole('button', { name: 'No' }).last().click();

    await this.page.getByText('Request a Charger', { exact: true }).click();
    await this.page.locator('#name').fill('pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#phone').fill('9900968219');
    await this.page.getByLabel('Organisation *', { exact: true }).fill('kazam');
    await this.page.getByRole('button', { name: 'Submit Request' }).click();
  }

  async hoverWheelers() {
    await this.page.getByText('2 - Wheeler', { exact: true }).nth(0).hover();
    await this.page.getByText('3 - Wheeler', { exact: true }).hover();
    await this.page.getByText('4 - Wheeler', { exact: true }).hover();
  }

  async getZipMini() {
    await this.page.getByRole('button', { name: 'Get Zip Mini' }).click();
    await this.page.getByLabel('Name', { exact: true }).fill('Pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#org_name').nth(1).fill('kazam');
    await this.page.locator('#phone').fill('9900968219');
    await this.page.locator('#message:visible').selectOption('Set up EV charging');
    await this.page.locator('#agreeToTerms').check();
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await expect(this.page.getByText('We will get in touch with you soon.')).toBeVisible();
  }
}

module.exports = { Kazam_ZipPage };

