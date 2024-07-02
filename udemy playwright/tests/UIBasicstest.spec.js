const {test ,expect} = require ('@playwrigth/est')
testonly('UIControls',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    const userName =page.locator('#username');
    const signIn= page.locator("#signInBtn");
    const dropdown=page.locator("select.form-control");
    await dropdown .SelectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator('#okayBtn');
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect (page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).unCheck();
    await expect(await page.locator("#terms").isChecked()).toBeFalsy();



});