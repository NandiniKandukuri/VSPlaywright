const{test,expect}=require('@playwright/test');
test('Practice',async({page})=>{
    //TEXT
    await page .goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html');
   // await page.locator("//a[text()='Sign in']").highlight();
   //await page.locator("//h1[text()='Register']").highlight();
    await page.locator("//label[text()='Email']").highlight();

    //CONTAINS
    //await page.locator("//a[contains(text(),'Sign in into')]").highlight();
    await page.locator("//div[contains(@class,' signin')]").highlight();

    //STARTS WITH
    await page.locator("//a[starts-with(text(),'Sign in into')]").highlight();

    //NORMALIZE-SPACE
    await page.locator("//label[normalize-space(text())='First Name']").highlight();

   // await page.goto('https://github.com/login');
   // await page.locator(" //label[normalize-space(text())='Username or email address']").highlight();

    //LAST
    await page.locator("(//table[@id = 'contactList']/tbody/tr)[last()]").highlight();
    await page.locator("(//table[@id = 'contactList']/tbody/tr)[position()=3]").highlight();
    await page.locator("(//table[@id = 'contactList']/tbody/tr)[position()>4]").highlight();
    await page.locator("(//table[@id = 'contactList']/tbody/tr)[position()!=5]").highlight();
    await page.locator("(//table[@id = 'contactList']/tbody/tr)[position()<2]").highlight();
    await page.locator("(//table[@id = 'contactList']/tbody/tr)[position()<=3]").highlight();
    await page.locator("(//table[@id = 'contactList']/tbody/tr)[position()>=4]").highlight();
     //if we size showing failed

})
