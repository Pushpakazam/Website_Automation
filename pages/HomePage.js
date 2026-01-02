class HomePage {
  constructor(page) {
    this.page = page;
    this.productsMenu = page.getByText('Products', { exact: true });
    this.acceptCookiesBtn = page.getByRole('button', { name: 'Accept all cookies' });
  }

  async openWebsite() {
    await this.page.goto('https://kazam.energy/');
  }

  async acceptCookiesIfPresent() {
    if (await this.acceptCookiesBtn.isVisible().catch(() => false)) {
      await this.acceptCookiesBtn.click();
    }
  }

  async selectModule(moduleName) {
    await this.productsMenu.hover();
    await this.page.getByText(moduleName, { exact: true }).click();
  }
}

module.exports = { HomePage };






