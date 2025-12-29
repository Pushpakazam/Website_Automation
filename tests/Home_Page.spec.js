const {test,expect} = require('@playwright/test');
test('HomePage_Header',async({page})=>{

    await page.goto('https://kazam.energy/', { waitUntil: 'networkidle' });
    const acceptCookies = page.getByRole('button', { name: 'Accept all cookies' });
    if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
    };
    //******** 1. Projects******** */
    // Hardware
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('Kazam Zip',{exact : true}).nth(0).click();
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('Kazam Zip Pro',{exact : true}).click();
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('Kazam Zap Pro',{exact : true}).click();
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('Kazam Zoom',{exact : true}).nth(0).click();
    // Software
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('Charging Management Solution',{exact : true}).click();  
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('EV Leasing Management',{exact : true}).nth(0).click(); 
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('Battery Swapping Management Solution',{exact : true}).click();
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('EV Mobile App',{exact : true}).nth(0).click();
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('Revenue Management Solution',{exact : true}).click();
    await page.getByText('Products',{exact : true}).hover();
    await page.getByText('Charger Health Checkup',{exact : true}).nth(0).click();
    //Solutions
    await page.getByRole('button',{name : 'Solutions'}).hover();
    await page.getByText('P2P Energy Trading Platform',{exact : true}).nth(0).click();
    await page.getByRole('button',{name : 'Solutions'}).hover();
    await page.getByText('Commercial Buildings',{exact : true}).nth(0).click();
    await page.getByRole('button',{name : 'Solutions'}).hover();
    await page.getByText('Home Charging',{exact : true}).click();
    await page.getByRole('button',{name : 'Solutions'}).hover();
    await page.getByText('RWAs',{exact : true}).nth(0).click();
    await page.getByRole('button',{name : 'Solutions'}).hover();
    await page.getByText('Construction Companies',{exact : true}).nth(0).click();
    await page.getByRole('button',{name : 'Solutions'}).hover();
    await page.getByText('Petrol Pumps',{exact : true}).click();
    //Resources
    await page.getByText('Resources',{exact : true}).hover();
    await page.getByText('Blog',{exact : true}).click();
    await page.getByText('Resources',{exact : true}).hover();
    await page.getByText('Whitepaper',{exact : true}).click();
    //About us

    await page.getByText('About Us',{exact : true}).hover();
    
});
test('HomePage_Footerlinks_Navigation',async({page})=>{
    await page.goto('https://kazam.energy/', { waitUntil: 'networkidle' });
    const acceptCookies = page.getByRole('button', { name: 'Accept all cookies' });
    if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
    }
    //********1. Solutions ********* */
    await page.getByRole('link',{name : 'P2P Energy Trading Platform'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Commercial Buildings'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'RWAs'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Construction Companies'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Petrol Pump'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Homes'}).click();
    await page.goBack();
    //*************** 2. Hardware*****
    await page.getByRole('link',{name : 'Kazam Zip - Pro'}).click();
    await page.goBack();
    await page.getByText('Kazam Zip',{exact: true}).nth(1).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Kazam Zoom'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Zap Pro'}).click();
    await page.goBack();
    //*****************3. Software**************/
    await page.getByRole('link',{name : 'CMS'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'EV Leasing Management'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'BSMS'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'EV Mobile App'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Charger Health Checkup'}).click();
    await page.goBack();
    //****************4.Useful links***********/
    await page.getByRole('link',{name : 'EV News'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'EV Blogs'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Review'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Become a Partner'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Career'}).click();
    await page.goBack();
    //**************5.Privacy Policy & Terms of Service ******************/
    await page.getByRole('link',{name : 'Privacy Policy'}).click();
    await page.goBack();
    await page.getByRole('link',{name : 'Terms of Service'}).click();
    await page.goBack();
    //****************5.social media icons **************/
    await  page.getByRole('link', { name: 'YouTube' }).click();
    await page.goto('https://kazam.energy/');
    await  page.getByRole('link', { name: 'X (Twitter)' }).click();
    await page.goto('https://kazam.energy/');
    await  page.getByRole('link', { name: 'Instagram' }).click();
    await page.goto('https://kazam.energy/');
    await  page.getByRole('link', { name: 'LinkedIn' }).click();
    await page.goto('https://kazam.energy/');
    await  page.getByRole('link', { name: 'Facebook' }).click();
    await page.goto('https://kazam.energy/');   
});
