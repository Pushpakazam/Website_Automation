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

reporter : 'html',

 
  use: {

    browserName : 'chromium',
    //browserName : 'firefox',
    //browserName : 'webkit',
    headless : false,
    screenshot : 'on',
    //trace : 'on', // for all the passed and failed test cases
    trace : 'retain-on-failure',
    
  },

});

module.exports = config ;


