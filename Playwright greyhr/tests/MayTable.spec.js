const { test, expect } = require('@playwright/test')

test("DataEntry.spec.js", async ({ page }) => {

    await page.goto('https://algoleaptechnologies.greythr.com/');
    await page.locator('//input[@id="username"]').fill('T0121');
    await page.locator('//input[@id="password"]').fill('Nandhu@123');
    await page.getByRole('button', { name: 'Log in' }).click();

    await page.getByRole('complementary').getByText(/^Attendance$/).click();
    await page.getByRole('complementary').getByText('Attendance info').click();
    
    await page.waitForTimeout(5000)
    const calenlist = await page.locator("//span[@title='A' or @title= 'P' or @title='H' or .='O']/../../../../*").count();

    for (let i = 1; i <=calenlist; i++) 
    {
        const date = await page.locator("(//span[@title='A' or @title= 'P' or @title='H' or .='O']/../../../../*)["+i+"]").textContent();
        console.log(date);
    }

})