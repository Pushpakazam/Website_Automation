class RevenueManagementPage {
  constructor(page) {
    this.page = page;

    // Common fields
    this.name = page.locator('#name');
    this.email = page.locator('#email');
    this.phone = page.locator('#phone');
    this.organizationVisible = page.locator('#org_name:visible');
    this.organization = page.getByLabel('Organization Name');
    this.messageDropdown = page.locator('#message:visible');
    this.otherMessage = page.locator('#otherMessage');
    this.consentCheckbox = page.getByLabel('By proceeding you agree to our');
  }

  /* ---------- CLOSE SUCCESS POPUP ---------- */
  async closeSuccessPopup() {
    const closeBtn = this.page.getByRole('button', { name: 'Close' });
    if (await closeBtn.isVisible().catch(() => false)) {
      await closeBtn.click();
    }
  }

  /* ---------- COMMON FORM SUBMIT ---------- */
  async submitForm() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.waitForSelector('text=We will get in touch with you soon.');
    await this.closeSuccessPopup();
  }

  /* ---------- BOOK A DEMO ---------- */
  async bookDemo(index, data) {
    await this.page.getByRole('button', { name: 'Book a Demo' }).nth(index).click();
    await this.fillBasicForm(data);
    await this.submitForm();
  }

  /* ---------- KNOW MORE ---------- */
  async knowMore(data) {
    await this.page.getByRole('button', { name: 'Know More' }).first().click();
    await this.fillBasicForm(data);
    await this.submitForm();
  }

  /* ---------- GENERATE REPORT ---------- */
  async generateReport(data) {
    await this.page.getByRole('button', { name: 'Generate Report' }).click();
    await this.fillBasicForm(data);
    await this.otherMessage.fill(data.otherMessage);
    await this.submitForm();
  }

  /* ---------- TALK TO EXPERT ---------- */
  async talkToExpert(data) {
    await this.page.getByRole('button', { name: 'Talk to Expert' }).click();
    await this.fillBasicForm(data);
    await this.submitForm();
  }

  /* ---------- DOWNLOAD REPORT ---------- */
async downloadReport(cardTitle, downloadPath, downloadIndex = 0) {
  const card = this.page.getByRole('heading', { name: cardTitle });
  await card.scrollIntoViewIfNeeded();
  await card.hover();
  await this.page
    .getByRole('button', { name: 'Download Report' })
    .nth(downloadIndex)
    .click();

  await this.name.fill('pushpa shivanna');
  await this.email.fill('pushpa@kazam.in');
  await this.phone.fill('6363360267');
  await this.organization.fill('Kazam');

  const [download] = await Promise.all([
    this.page.waitForEvent('download'),
    this.page.getByRole('button', { name: 'Download', exact: true }).click()
  ]);

  await download.saveAs(`${downloadPath}/${download.suggestedFilename()}`);
  await this.closeSuccessPopup();
}


  /* ---------- FEATURE VALIDATION ---------- */
  async validateFeature(title, description) {
    await this.page.getByText(title, { exact: true }).hover();
    await this.page.getByText(description, { exact: true }).isVisible();
  }

  /* ---------- COMMON FORM FILL ---------- */
  async fillBasicForm(data) {
    await this.name.fill(data.name);
    await this.email.fill(data.email);
    await this.organizationVisible.fill(data.organization);
    await this.phone.fill(data.phone);
    await this.messageDropdown.selectOption(data.message);
    await this.consentCheckbox.check();
  }
}

module.exports = { RevenueManagementPage };
