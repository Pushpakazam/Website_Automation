// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  
  testDir: './tests',

  timeout: 120 * 1000, 

  expect: {
    timeout: 120 * 1000, 
  },

  // 1. Disable parallel execution within files
  fullyParallel: false,

  // 2. Ensure only one test runs at a time globally
  workers: 1,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }], 
    ['allure-playwright'] 
  ],

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
  },
});

export default config;
