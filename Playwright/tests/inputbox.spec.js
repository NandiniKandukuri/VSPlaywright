const {test,expect} = require('@playwright/test')
test('handle inputbox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Inputbox-first name
    await expect ( page.locator("//input[@id='name']")).toBeVisible();
    await expect( page.locator("//input[@id='name']")).toBeEmpty();
    await expect( page.locator("//input[@id='name']")).toBeEditable();
    await expect( page.locator("//input[@id='name']")).toBeEnabled();

    await page.locator("//input[@id='name']").fill("John")
    await page.waitForTimeout(5000);    

    });

 test('handle radio button',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com')
        //Radio button
        await page.locator("//input[@value='option2']").click();
        await expect(await page.locator("//input[@value='option2']")).toBeChecked();
        await expect(await page.locator("//input[@value='option2']").isChecked()).toBeTruthy();
        await expect(await page.locator("//input[@value='option1']").isChecked()).toBeFalsy();

    });
