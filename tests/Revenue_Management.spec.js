const {test,expect} = require ('@playwright/test');
test('RM_Book a Demo',async({browser}) =>{

    const context = await browser.newContext();
    const page =await context.newPage();
    await page.goto('https://kazam.energy/');
    await page.getByText('Products',{exact :true}).hover();
    await page.getByText('Revenue Management Solution',{exact :true}).click();
    await page.getByRole('button',{name : 'Book a Demo'}).nth(0).click();
    await page.locator('#name').fill('pushpa shivanna');
    await page.locator('#email').fill('pushpa@kazam.in');
    await page.locator('#org_name:visible').fill('Kazam');
    await page.locator('#phone').fill('6363360267');
    const iwantto = page.locator('#message:visible');
    await iwantto.selectOption('Manage EV charging');
    await page.getByLabel('By proceeding you agree to our').check();
    await page.getByRole('button',{name : 'Submit'}).click();
    await page.waitForSelector('text=We will get in touch with you soon.');
    await expect(page.getByText('We will get in touch with you soon.')).toBeVisible();

});

test('RM_Know More',async({page})=>{
    await page.goto('https://kazam.energy/');
    await page.getByText('Products',{exact :true}).hover();
    await page.getByText('Revenue Management Solution',{exact :true}).click();
    await page.getByRole('button',{name :'Know More'}).nth(0).click();
    await page.locator('#name').fill('pushpa shivanna');
    await page.locator('#email').fill('pushpa@kazam.in');
    await page.locator('#org_name:visible').fill('Kazam');
    await page.locator('#phone').fill('6363360267');
    const iwantto = page.locator('#message:visible');
    await iwantto.selectOption('Request Charger');
    await page.getByLabel('By proceeding you agree to our').check();
    await page.getByRole('button',{name : 'Submit'}).click();
    await page.waitForSelector('text=We will get in touch with you soon.');
    await expect(page.getByText('We will get in touch with you soon.')).toBeVisible();

});

test('RM_GenerateReport',async({page})=>{
    await page.goto('https://kazam.energy/');
    await page.getByText('Products',{exact :true}).hover();
    await page.getByText('Revenue Management Solution',{exact :true}).click();
    await page.getByRole('button',{name :'Generate Report'}).click();
     await page.locator('#name').fill('pushpa shivanna');
    await page.locator('#email').fill('pushpa@kazam.in');
    await page.locator('#org_name:visible').fill('Kazam');
    await page.locator('#phone').fill('6363360267');
    const iwantto = page.locator('#message:visible');
    await iwantto.selectOption('Others');
    await page.locator('#otherMessage').fill('I want to connect with sales team');
    await page.getByLabel('By proceeding you agree to our').check();
    await page.getByRole('button',{name : 'Submit'}).click();
    await page.waitForSelector('text=We will get in touch with you soon.');
    await expect(page.getByText('We will get in touch with you soon.')).toBeVisible();

});
test('RM_Download Report',async({page})=>{ // not working should do this later
    await page.goto('https://kazam.energy/');
    await page.getByText('Products',{exact :true}).hover();
    await page.getByText('Revenue Management Solution',{exact :true}).click();
 await page
    .getByRole('heading', { name: 'Oil & Gas Major (Public Sector)' })
    .locator('..')
    .getByRole('button', { name: 'Download Report' })
    .click();
    await page.getByRole('button', { name: 'Download Report' }).click();
    await page.locator('#name').fill('pushpa shivanna');
    await page.locator('#email').fill('pushpa@kazam.in');
    await page.locator('#phone').fill('6363360267');
    await page.locator('#org_name:visible').fill('Kazam');
    await page.getByRole('button',{name : 'Download'}).click();

    

})
test('RM_TalkToExpert',async({page}) =>{
    await page.goto('https://kazam.energy/');
    await page.getByText('Products',{exact :true}).hover();
    await page.getByText('Revenue Management Solution',{exact :true}).click();
    await page.getByRole('button',{name : 'Talk to Expert'}).click();
    await page.locator('#name').fill('pushpa shivanna');
    await page.locator('#email').fill('pushpa@kazam.in');
    await page.locator('#org_name:visible').fill('Kazam');
    await page.locator('#phone').fill('6363360267');
    const iwantto = page.locator('#message:visible');
    await iwantto.selectOption('Set up EV charging');
    await page.getByLabel('By proceeding you agree to our').check();
    await page.getByRole('button',{name : 'Submit'}).click();
    await page.waitForSelector('text=We will get in touch with you soon.');
    await expect(page.getByText('We will get in touch with you soon.')).toBeVisible();

});
test('RM_Book a Demo1',async({page}) => {
    await page.goto('https://kazam.energy/');
    await page.getByText('Products',{exact :true}).hover();
    await page.getByText('Revenue Management Solution',{exact :true}).click();
    await page.getByRole('button',{name : 'Book a Demo'}).nth(1).click();
    await page.locator('#name').fill('pushpa shivanna');
    await page.locator('#email').fill('pushpa@kazam.in');
    await page.locator('#org_name:visible').fill('Kazam');
    await page.locator('#phone').fill('6363360267');
    const iwantto = page.locator('#message:visible');
    await iwantto.selectOption('Have a consultation');
    await page.getByLabel('By proceeding you agree to our').check();
    await page.getByRole('button',{name : 'Submit'}).click();
    await page.waitForSelector('text=We will get in touch with you soon.');
    await expect(page.getByText('We will get in touch with you soon.')).toBeVisible();


});
test('declutter EV Charging payments',async({page})=>{

    await page.goto('https://kazam.energy/');
    await page.getByText('Products',{exact :true}).hover();
    await page.getByText('Revenue Management Solution',{exact :true}).click();
    await page.getByText('Anomaly Detection',{exact : true}).hover();
    await expect(page.getByText('Automatically detect and correct irregularities during charging sessions to ensure accurate data and smooth operations.',{exact : true})).toBeVisible();
    await page.getByText('Split Payments',{exact : true}).hover();
    await expect(page.getByText('Automate payments according to contracts across chargers, hosts, and organisations.',{exact : true})).toBeVisible();
    await page.getByText('Multi Tax Configurations',{exact : true}).hover();
    await expect(page.getByText('Handle complex tax scenarios across geographies and automate compliance with billing and invoicing.',{exact : true})).toBeVisible();
    await page.getByText('50+ Payment Gateway Integration',{exact : true}).hover();
    await expect(page.getByText('Automatic settlements with bulk invoice generation.',{exact : true})).toBeVisible();
    await page.getByText('Tariff Engine',{exact : true}).hover();
    await expect(page.getByText('Configure various tariffs based on Time of Day, Fast Charging, Charge by Hour and Flat tariff to maximize EV Charging revenue across your operations.',{exact : true})).toBeVisible();
    await page.getByText('Corporate Wallets',{exact : true}).hover();
    await expect(page.getByText('Easily manage EV charging reimbursements for your team, invite multiple employees, automate collections, set rules, and save time with grouped requests.',{exact : true})).toBeVisible();
    await page.getByText('Coupons and Subscriptions',{exact : true}).hover();
    await expect(page.getByText('Retain customers with coupons and subscription models.',{exact : true})).toBeVisible();

    
});

