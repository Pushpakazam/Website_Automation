// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',

  timeout: 120 * 1000, // override default 30s timeout

  expect: {
    timeout: 120 * 1000, // assertion timeout
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // Email
    ['allure-playwright'] // Local only
  ],

  use: {
    browserName: 'chromium',
    // browserName: 'firefox',
    // browserName: 'webkit',

    headless: false,

    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
});

export default config;
