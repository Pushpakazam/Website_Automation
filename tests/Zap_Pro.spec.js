const {test,expect} = require('@playwright/test');
//command : npx playwright test tests/Revenue_Management.spec.js --reporter=allure-playwright(to generate allure reports along with html report)
//command : allure generate ./allure-results --clean()



test('Zap_Pro_Book a charger flow',async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://kazam.energy/');
    await page.locator('//div[contains(text(),"Products")]').hover();
    await page.getByText('Kazam Zap Pro', { exact: true }).click();
    // Book a charger --->> form
    await page.getByText('Book a Charger', { exact: true }).click();
    await page.locator('#name').fill('pushpa shivanna');
    await page.locator('#email').fill('pushpa@kazam.in');
    await page.locator('#org_name:visible').fill('Kazam');
    await page.locator('#phone').fill('6363360267');
    const iwantto = page.locator('#message:visible');
    await iwantto.selectOption('Implement end-to-end e-mobility solutions');
    await page.getByLabel('By proceeding you agree to our').check();
    await page.getByRole('button',{name : 'Submit'}).click();
    await expect(page.getByText('get in touch with you')).toBeVisible();
    const message = await page.getByText('We will get in touch with you soon.', {exact : true}).textContent();
    console.log(message);

});

test('Zap_Pro_Download specs',async({page}) =>{

    await page.goto('https://kazam.energy/');
    await page.locator('//div[contains(text(),"Products")]').hover();
    await page.getByText('Kazam Zap Pro', { exact: true }).click();
    // download specs
    await page.getByRole('button', {name: 'Download Kazam Zap Pro specifications PDF'}).click();
    await page.locator('#name').fill('pushpa');
    await page.locator('#email').fill('pushpashivanna789@gmail.com');
    await page.locator('#phone').fill('9900968219');
    await page.locator('#organization').fill('tcs');
    const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.getByText('Download', { exact: true }).click()
]);

// Get file name
const fileName = download.suggestedFilename();
console.log(fileName);

// Save the file
await download.saveAs(`./downloads/${fileName}`);

});

test('Zap_Pro_CompareChargers',async({page})=>{
await page.goto('https://kazam.energy/');
await page.locator('//div[contains(text(),"Products")]').hover();
await page.getByText('Kazam Zap Pro', { exact: true }).click();
// compare Chargers
await page.getByText('Compare chargers',{exact: true}).click();
//await page.getByText('Single Gun',{exact :true}).click(); // for single gun
await page.getByRole('button', { name: 'Dual Gun' }).nth(1).click(); // for duel gun
await page.getByText('Download',{exact :true}).click();
await page.locator('#name').fill('pushpa');
await page.locator('#email').fill('pushpashivanna789@gmail.com');
await page.locator('#phone').fill('9900968219');
await page.locator('#organization').fill('tcs');

 // Wait for download + click together
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.getByRole('button', { name: 'Download'}).nth(2).click()
]);

// Get file name
const fileName = download.suggestedFilename();
console.log(fileName);

// Save the file
await download.saveAs(`./downloads/${fileName}`);

});

test('Zap_Pro_Request_Charger',async({page}) =>{
await page.goto('https://kazam.energy/');
await page.locator('//div[contains(text(),"Products")]').hover();
await page.getByText('Kazam Zap Pro', { exact: true }).click();
//*** */ single gun -->>power ratings -->connector options(connector one)********************
// power ratings
// await page.getByRole('button',{name : '6kW'}).click(); 
// await page.getByRole('button',{name : '4kW'}).click();
// await page.getByRole('button',{name : '8kW'}).click();
// await page.getByRole('button',{name : '3kW'}).click();
// // connector options --- > connector one
// await page.getByRole('button',{name :'Type 6'}).click(); // type 6
// await page.getByRole('button',{name : 'Type 7'}).click(); // type 7
// await page.getByRole('button',{name : 'Chogori'}).click(); // chogori
//********* Dual Gun ---> power ratings --> connector options(connector 1 and connector 2) */
// dual gun selection
await page.getByRole('button',{name : 'Dual Gun'}).click();
// power ratings
await page.getByText('4kW+4kW',{exact : true}).click();
//await page.getByRole('button',{name : '3kW+3kW'}).click();
// connector options --> connector 1
await page.getByRole('button',{name :'Type 6'}).nth(0).click(); // type 6
//await page.getByRole('button',{name : 'Type 7'}).nth(0).click(); // type 7
//await page.getByRole('button',{name : 'Chogori'}).nth(0).click(); // chogori
// connector options --> connector 2 
//await page.getByRole('button',{name :'Type 6'}).nth(1).click(); // type 6
//await page.getByRole('button',{name : 'Type 7'}).nth(1).click(); // type 7
await page.getByRole('button',{name : 'Chogori'}).nth(1).click();


// Request charger
await page.getByText('Request Charger',{exact : true}).click();
await page.locator('#name').fill('pushpa');
await page.locator('#email').fill('pushpashivanna789@gmail.com');
await page.locator('#phone').fill('9900968219');
const orgInput = page.getByLabel('Organisation *');
await orgInput.scrollIntoViewIfNeeded();
await orgInput.fill('tcs');
await Promise.all([
page.getByRole('button',{name : 'Submit Request'}).click(),
page.waitForSelector('text=Thank you for requesting a charger')

]);
await expect(page.getByText('Thank you for requesting a charger. Team Kazam will be contacting you regarding this.')).toBeVisible();

});


test('Zap_Pro_BookADemo',async({page})=>{
await page.goto('https://kazam.energy/');
await page.locator('//div[contains(text(),"Products")]').hover();
await page.getByText('Kazam Zap Pro', { exact: true }).click();
await page.getByRole('button',{name : 'Book a Demo'}).click();
await page.locator('#name').fill('pushpa shivanna');
await page.locator('#email').fill('pushpa@kazam.in');
await page.locator('#org_name:visible').fill('Kazam');
await page.locator('#phone').fill('6363360267');
const iwantto = page.locator('#message:visible');
await iwantto.selectOption('Manage EV Fleet');
await page.getByLabel('By proceeding you agree to our').check();
await page.getByRole('button',{name : 'Submit'}).click();
await page.waitForSelector('text=We will get in touch with you soon.');
await expect(page.getByText('We will get in touch with you soon.')).toBeVisible();

});






