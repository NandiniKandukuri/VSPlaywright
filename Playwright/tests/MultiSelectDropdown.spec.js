const {test,expect}= require('@playwright/test')
test("Handle dropdown",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple options from multi select dropdown
    //await page.selectOption('#colors',['Blue','Red','Yellow']);

    //1.check number of options in dropdown
   // const options =await page.locator('#colors option')
    //await expect(options).toHaveCount(5);

    //2.check numaber of options in dropdown using js array
    //const options =await page.$$('#colors option')
    //console.log("Number of option:",options.length)

    //3.check presence of value in the dropdown
    const content =await page.locator('#colors').textContent()
    await expect (content.includes('Blue')).toBeTruthy();
})