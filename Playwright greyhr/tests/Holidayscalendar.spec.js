const {test,expect}= require('@playwright/test')

test("Handle DropDowns",async({page})=>{

    await page.goto('https://algoleaptechnologies.greythr.com/');
    await page.locator('//input[@id="username"]').fill('T0121');
    await page.locator('//input[@id="password"]').fill('Nandhu@123');
    await page.getByRole('button',{name:'Log in'}).click();

    await page.getByRole('complementary').locator('a').filter({ hasText: /^Leave$/}).click();
    await page.getByRole('complementary').getByText('Holiday calendar').click();
    await expect( page.locator("//div[contains(text(),' Jan 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Jan 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Jan 2024 ")]/../ul[@class="month-holiday-list"]').textContent());
    
    await expect( page.locator("//div[contains(text(),' Feb 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Feb 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Feb 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

    await expect( page.locator("//div[contains(text(),' Mar 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Mar 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Mar 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

    await expect( page.locator("//div[contains(text(),' Apr 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Apr 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Apr 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

    await expect( page.locator("//div[contains(text(),' May 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," May 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," May 2024 ")]/../ul[@class="month-holiday-list"]').textContent());
 
    await expect( page.locator("//div[contains(text(),' Jun 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Jun 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Jun 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

    await expect( page.locator("//div[contains(text(),' Jul 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Jul 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Jul 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

    await expect( page.locator("//div[contains(text(),' Aug 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Aug 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Aug 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

    await expect( page.locator("//div[contains(text(),' Sep 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Sep 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Sep 2024 ")]/../ul[@class="month-holiday-list"]').textContent());
  
    await expect( page.locator("//div[contains(text(),' Oct 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Oct 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Oct 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

    await expect( page.locator("//div[contains(text(),' Nov 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Nov 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Nov 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

    await expect( page.locator("//div[contains(text(),' Dec 2024 ')]")).toBeVisible();
    await expect(page.locator('//div[contains(text()," Dec 2024 ")]/../ul[@class="month-holiday-list"]')).toBeVisible();
    console.log(await page.locator('//div[contains(text()," Dec 2024 ")]/../ul[@class="month-holiday-list"]').textContent());

})