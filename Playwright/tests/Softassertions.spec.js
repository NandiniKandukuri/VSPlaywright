const {test,expect} = require('@playwright/test')
test("soft assertions",async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    //Hard assertions
    await expect(page).toHaveTitle('STORE')
    await expect (page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible();

    //await expect.soft(page).toHaveTitle("Store 123");

    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})