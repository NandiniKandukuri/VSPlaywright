const {test,expect} = require ('@playwright/test')
test ('Home page', async({page})=>{
    await page.goto('https://algoleaptechnologies.greythr.com/');

    //span[contains(@class,'gt-greytip-header-logo')]
   await page.locator('//input[@id="username"]').fill('T0121');
   await page.locator('//input[@id="password"]').fill('Nandhu@123');
   await page.getByRole('button',{name:'Log in'}).click();

//await expect (page.locator('//h1[contains(@class,"text-base")]')).toBeVisible();
//await expect(page.locator('//h1[contains(@class,"text-secondary")]')).toBeVisible();

//await expect(page.locator('//span[@class="primary-title"]'));



//await waitForTimeout(3000);
}) 