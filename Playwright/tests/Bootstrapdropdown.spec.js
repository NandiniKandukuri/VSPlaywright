const {test ,expect} = require('@playwright/test')
test ('Bootstrapdropdown',async({page})=>{
    await page.goyo('https://www.jquery-az.com/boots/demo.php?')

    await page.locator('.multiselect').click();

    //1.
    const options=await page.locator('ul>li label input')
    await expect(options).toHaveCount(11);
})

   //2.
   const options= await page.$$('ul>li label input')
   await expect(options.length).toBe(11);