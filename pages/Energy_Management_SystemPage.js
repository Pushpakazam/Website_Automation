const { expect } = require('@playwright/test');

class EnergyManagementSystemPage {
  constructor(page) {
    this.page = page;
  }

  async openEMSModule() {
    await this.page.getByRole('button', { name: 'Products' }).hover();
    await this.page.getByText('Energy Management System', { exact: true }).nth(0).click();
  }

  async bookDemo(index = 0, message) {
    await this.page.getByText('Book a Demo', { exact: true }).nth(index).click();
    await this.fillForm(message);
  }

  async knowMore(index, message) {
    await this.page.getByRole('button', { name: 'Know More' }).nth(index).click();
    await this.fillForm(message);
  }

  async fillForm(message) {
    await this.page.getByLabel('Name', { exact: true }).fill('Pushpa shivanna');
    await this.page.locator('#email').fill('pushpa@kazam.in');
    await this.page.locator('#org_name').nth(1).fill('kazam');
    await this.page.locator('#phone').fill('9900968219');
    await this.page.locator('#message:visible').selectOption(message);
    await this.page.locator('#agreeToTerms').check();
    await this.page.getByRole('button', { name: 'Submit' }).click();

    await this.page.waitForSelector('text=We will get in touch with you soon.');
    await expect(
      this.page.getByText('We will get in touch with you soon.')
    ).toBeVisible();
  }

  async hoverSmartModules() {
    await this.page.getByText('Smart Load Management', { exact: true }).hover();
    await this.page.getByText('Cost Optimizer', { exact: true }).hover();
    await this.page.getByText('Predictive Maintenance', { exact: true }).hover();
    await this.page.getByText('Depot Energy Overview', { exact: true }).hover();
  }

  async openKPIs() {
    await this.page.getByText('Charger Efficiency Report', { exact: true }).nth(0).click();
    await this.page.getByText('Depot Energy Loss Report', { exact: true }).nth(0).click();
    await this.page.getByText('Electricity Bill Report', { exact: true }).nth(0).click();
  }
}

module.exports = { EnergyManagementSystemPage };
