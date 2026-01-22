const { expect } = require('@playwright/test');

class VehicleDepotManagementPage {
  constructor(page) {
    this.page = page;
  }

  async bookDemo(index = 0) {
    await this.page.getByText('Book a Demo', { exact: true }).nth(index).click();
    await this.fillForm();
  }

  async knowMore(index) {
    if (index === -1) {
      await this.page.getByText('Know More', { exact: true }).last().click();
    } else {
      await this.page.getByText('Know More', { exact: true }).nth(index).click();
    }
    await this.fillForm();
  }

  async fillForm() {
    await this.page.getByLabel('Name', { exact: true }).fill('Pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#org_name').nth(1).fill('kazam');
    await this.page.locator('#phone').fill('9900968219');

    const iwantto = this.page.locator('#message:visible');
    await iwantto.selectOption('Set up EV charging');

    await this.page.locator('#agreeToTerms').check();
    await this.page.getByRole('button', { name: 'Submit' }).click();

    await this.page.waitForSelector('text=We will get in touch with you soon.');
    await expect(
      this.page.getByText('We will get in touch with you soon.')
    ).toBeVisible();
  }

  async hoverSmartModules() {
    await this.page.getByText('Energy Layer', { exact: true }).hover();
    await this.page.getByText('Fleet Layer', { exact: true }).hover();
    await this.page.getByText('Maintenance Layer', { exact: true }).hover();
    await this.page.getByText('Revenue Layer', { exact: true }).hover();
  }

  async automateSlider() {
    await this.page.getByRole('button', { name: 'Next testimonial' }).click();
    await this.page.getByRole('button', { name: 'Previous testimonial' }).click();
  }
}

module.exports = { VehicleDepotManagementPage };
