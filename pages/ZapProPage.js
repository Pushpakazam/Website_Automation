class ZapProPage {
  constructor(page) {
    this.page = page;

    // Common fields
    this.name = page.locator('#name');
    this.email = page.locator('#email');
    this.phone = page.locator('#phone');
    this.organizationVisible = page.locator('#org_name:visible');
    this.organization = page.locator('#organization');
    this.messageDropdown = page.locator('#message:visible');
    this.consentCheckbox = page.getByLabel('By proceeding you agree to our');
  }

  /* ---------- COMMON: CLOSE SUCCESS POPUP ---------- */
  async closeSuccessPopup() {
    const closeBtn = this.page.getByRole('button', { name: 'Close' });
    if (await closeBtn.isVisible().catch(() => false)) {
      await closeBtn.click();
    }
  }

  /* ---------- BOOK A CHARGER ---------- */
  async bookACharger(data) {
    await this.page.getByText('Book a Charger', { exact: true }).click();

    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.organizationVisible.fill(data.organization);
    await this.phone.fill(data.phone);
    await this.messageDropdown.selectOption(data.message);
    await this.consentCheckbox.check();

    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.waitForTimeout(2000);

    await this.closeSuccessPopup();
  }

  /* ---------- DOWNLOAD SPECS ---------- */
  async downloadSpecs(data, downloadPath) {
    await this.page.getByRole('button', {
      name: 'Download Kazam Zap Pro specifications PDF'
    }).click();

    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.phone.fill(data.phone);
    await this.organization.fill(data.organization);

    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.getByText('Download', { exact: true }).click()
    ]);

    await download.saveAs(`${downloadPath}/${download.suggestedFilename()}`);
    await this.page.waitForTimeout(1000);

    await this.closeSuccessPopup();
  }

  /* ---------- COMPARE CHARGERS ---------- */
  async compareChargers(data, downloadPath) {
    await this.page.getByText('Compare chargers', { exact: true }).click();
    await this.page.getByRole('button', { name: 'Dual Gun' }).nth(1).click();
    await this.page.getByText('Download', { exact: true }).click();

    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.phone.fill(data.phone);
    await this.organization.fill(data.organization);

    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.getByRole('button', { name: 'Download' }).nth(2).click()
    ]);

    await download.saveAs(`${downloadPath}/${download.suggestedFilename()}`);
    await this.page.waitForTimeout(1000);

    await this.page.getByRole('button', { name: 'Back' }).click();
    await this.closeSuccessPopup();
  }

  /* ---------- REQUEST CHARGER ---------- */
  async requestDualGunCharger(data) {
    await this.page.getByRole('button', { name: 'Dual Gun' }).nth(0).click();
    await this.page.getByText('4kW+4kW', { exact: true }).click();
    await this.page.getByRole('button', { name: 'Type 6' }).nth(0).click();
    await this.page.getByRole('button', { name: 'Chogori' }).nth(1).click();

    await this.page.getByText('Request Charger', { exact: true }).click();

    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.phone.fill(data.phone);
    await this.page.getByLabel('Organisation *').fill(data.organization);

    await this.page.getByRole('button', { name: 'Submit Request' }).click();
    await this.page.waitForTimeout(2000);

    await this.closeSuccessPopup();
  }

  /* ---------- BOOK A DEMO ---------- */
  async bookADemo(data) {
    await this.page.getByRole('button', { name: 'Book a Demo' }).click();

    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.organizationVisible.fill(data.organization);
    await this.phone.fill(data.phone);
    await this.messageDropdown.selectOption(data.message);
    await this.consentCheckbox.check();

    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.waitForTimeout(2000);

    await this.closeSuccessPopup();
  }
}

module.exports = { ZapProPage };
