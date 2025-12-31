// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout : 120 * 1000, //  override time for all tests playwright provides deafult time as 30 sec
expect  : {
  timeout : 120*1000, // assertion validation

},

reporter: [
  ['list'],
  ['allure-playwright']
],


 
  use: {

    browserName : 'chromium',
    //browserName : 'firefox',
    //browserName : 'webkit',
    headless : false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'retain-on-failure', 
    
  },

});

module.exports = config ;


