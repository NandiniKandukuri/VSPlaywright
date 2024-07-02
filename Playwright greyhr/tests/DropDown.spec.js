const {test,expect}= require('@playwright/test')

test("Handle DropDowns",async({page})=>{

    await page.goto('https://algoleaptechnologies.greythr.com/');
    await page.locator('//input[@id="username"]').fill('T0121');
    await page.locator('//input[@id="password"]').fill('Nandhu@123');
    await page.getByRole('button',{name:'Log in'}).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Engage' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'To do' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Tasks' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Review' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: /^Salary$/ }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'payslips' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'YTD Reports' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'IT Statement' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'IT Declaration' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Loans and Advances' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Reimbursement' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Proof Of Investment' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Salary Revisio' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Proof Of Investment' }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: /^Salary$/ }).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: /^Leave$/}).click();
    await page.getByRole('complementary').locator('a').filter({ hasText: 'Apply' }).click();
    await page.getByRole('complementary').getByText('Leave Balances').click();
    await page.getByRole('complementary').getByText('Leave calendar').click();
    await page.getByRole('complementary').getByText('Holiday calendar').click();
    await page.getByRole('complementary').getByText('Leave Balances').click();
    await page.getByRole('complementary').getByText(/^Leave$/).click();
    await page.getByRole('complementary').getByText(/^Attendance$/).click();
    await page.getByRole('complementary').getByText('Attendance info').click();
    await page.getByRole('complementary').getByText(' Document Center').click();
    await page.getByRole('complementary').getByText('People').click();

})


