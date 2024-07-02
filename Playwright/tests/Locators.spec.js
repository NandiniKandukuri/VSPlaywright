import {test,expect} from '@playwright/test'
test('Locators',async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    await page.click('id=login2')

    await page.fill('#loginusername','nandini')

    await page.fill("input[id='login password']",'test@123')

    await page.click("//button[normalize-space()='Log in']")

    const logoutlink =await page.locator("//a[normalized-space()='Logout']")
    await expect(logoutlink).toBeVisible();
    await page.close()
})