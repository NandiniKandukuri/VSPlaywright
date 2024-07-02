const {test,expect}= require('@playwright/test')

test("DataEntry.spec.js",async({page})=>{

    await page.goto('https://algoleaptechnologies.greythr.com/');
    await page.locator('//input[@id="username"]').fill('T0121');
    await page.locator('//input[@id="password"]').fill('Nandhu@123');
    await page.getByRole('button',{name:'Log in'}).click();

    await page.getByRole('complementary').getByText(/^Attendance$/).click();
    await page.getByRole('complementary').getByText('Attendance info').click();
    await page.locator('//a[@class="text-4"]').click();
    await page.locator('//h2[.="01 " ]/../../..//input[@name="reason"]').fill('Holiday');
    await page.locator('//h2[.="02 " ]/../../..//input[@name="reason"]').fill('Due to rain');
    await page.locator('//h2[.="06 " ]/../../..//input[@name="reason"]').fill('Forgot to swipe');
    await page.locator('//h2[.="07 " ]/../../..//input[@name="reason"]').fill('Records not updated');
    await page.locator('//h2[.="15 " ]/../../..//input[@name="reason"]').fill('Server problem');
    await page.locator('//h2[.="17 " ]/../../..//input[@name="reason"]').fill('Did Early Logout');

    
})