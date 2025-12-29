class Zap_Pro{

    constructor(page){

        this.Product = page.locator('//div[contains(text(),"Products")]');
        this.ZapPro = page.getByText('Kazam Zap Pro', { exact: true });
        this.Bookacharger = page.getByText('Book a Charger', { exact: true });
        this.Name = page.locator('#name');
        this.emailID = page.locator('#email');
        this.orgName = page.getByLabel('Organisation Name');
    }


}