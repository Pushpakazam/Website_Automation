const { expect } = require('@playwright/test');

class HomePageValidationPage {
  constructor(page) {
    this.page = page;
  }

  async acceptCookies() {
    const acceptCookies = this.page.getByRole('button', { name: 'Accept all cookies' });
    if (await acceptCookies.isVisible().catch(() => false)) {
      await acceptCookies.click();
    }
  }

  /* -------- Contact / Get in Touch -------- */
  async submitContactForm() {
    await this.page.getByText('Get in Touch').nth(1).click();

    const contactForm = this.page
      .getByRole('heading', { name: 'Contact Us' })
      .locator('..');

    await contactForm.locator('#name').fill('Pushpa');
    await contactForm.locator('#email').fill('pushpa@gmail.com');
    await contactForm.locator('#org_name').fill('TCS');
    await contactForm.locator('#phone').fill('6363360267');

    await this.page.locator('#message:visible').selectOption('Manage EV Fleet');
    await contactForm.locator('input[type="checkbox"]').first().check();

    await this.page.getByRole('button', { name: 'Submit' }).click();
    await this.page.waitForSelector('text=We will get in touch with you soon.');
    await expect(
      this.page.getByText('We will get in touch with you soon.')
    ).toBeVisible();
  }

  /* -------- Header Navigation -------- */
  async validateHeaderNavigation() {
    // Products → Hardware
    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Kazam Zip', { exact: true }).nth(0).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Kazam Zip Pro', { exact: true }).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Kazam Zap Pro', { exact: true }).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Kazam Zoom', { exact: true }).nth(0).click();

    // Products → Software
    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Charging Management Solution', { exact: true }).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('EV Leasing Management', { exact: true }).nth(0).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Battery Swapping Management Solution', { exact: true }).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Vehicle Depot Management', { exact: true }).nth(0).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Revenue Management Solution', { exact: true }).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('EV Mobile App', { exact: true }).nth(0).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Charger Health Checkup', { exact: true }).nth(0).click();

    await this.page.getByText('Products', { exact: true }).hover();
    await this.page.getByText('Energy Management System', { exact: true }).nth(0).click();

    // Solutions
    await this.page.getByText('Solutions', { exact: true }).nth(3).hover();
    await this.page.getByText('P2P Energy Trading Platform', { exact: true }).nth(0).click();

    await this.page.getByRole('button', { name: 'Solutions' }).hover();
    await this.page.getByText('Commercial Buildings', { exact: true }).nth(0).click();

    await this.page.getByRole('button', { name: 'Solutions' }).hover();
    await this.page.getByText('Home Charging', { exact: true }).click();

    await this.page.getByRole('button', { name: 'Solutions' }).hover();
    await this.page.getByText('RWAs', { exact: true }).nth(0).click();

    await this.page.getByRole('button', { name: 'Solutions' }).hover();
    await this.page.getByText('Construction Companies', { exact: true }).nth(0).click();

    await this.page.getByRole('button', { name: 'Solutions' }).hover();
    await this.page.getByText('Petrol Pumps', { exact: true }).click();

    // Resources
    await this.page.getByText('Resources', { exact: true }).hover();
    await this.page.getByText('Blogs', { exact: true }).click();

    await this.page.getByText('Resources', { exact: true }).hover();
    await this.page.getByText('Whitepaper', { exact: true }).click();

    await this.page.getByText('Resources', { exact: true }).hover();
    await this.page.getByText('Product Updates', { exact: true }).click();

    await this.page.getByText('Resources', { exact: true }).hover();
    await this.page.getByText('Case Studies', { exact: true }).click();

    await this.page.getByText('Resources', { exact: true }).hover();
    await this.page.getByText('Press', { exact: true }).click();

    await this.page.getByText('Resources', { exact: true }).hover();
    await this.page.getByText('Media Kit', { exact: true }).click();

    // About Us
    await this.page.getByText('About Us', { exact: true }).hover();
  }

  /* -------- Footer Navigation -------- */
  async validateFooterLinks() {
    const footerLinks = [
      'P2P Energy Trading Platform',
      'Commercial Buildings',
      'RWAs',
      'Construction Companies',
      'Petrol Pump',
      'Homes',
      'Kazam Zip - Pro',
      'Kazam Zoom',
      'Zap Pro',
      'CMS',
      'EV Leasing Management',
      'BSMS',
      'EV Mobile App',
      'Charger Health Checkup',
      'Revenue Management',
      'Vehicle Depot Management',
      'Energy Management System',
      'Blogs',
      'Whitepapers',
      'Product Updates',
      'Case Studies',
      'Press',
      'Media Kit',
      'Career',
      'Privacy Policy',
      'Terms of Service'
    ];

    for (const link of footerLinks) {
      await this.page.getByRole('link', { name: link }).click();
      await this.page.goBack();
    }
  }

  /* -------- Social Media -------- */
  async validateSocialIcons() {
    const socialLinks = ['YouTube', 'X (Twitter)', 'Instagram', 'LinkedIn', 'Facebook'];

    for (const icon of socialLinks) {
      await this.page.getByRole('link', { name: icon }).click();
      await this.page.goto('https://kazam.energy/');
    }
  }
}

module.exports = { HomePageValidationPage };
