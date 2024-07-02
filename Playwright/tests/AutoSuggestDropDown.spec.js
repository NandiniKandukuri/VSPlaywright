const {test,expect}= require('@playwright/test')
test('AutoSuggestDropDown',async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
    const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of fromCityOptions)
        {
            const value =await option.textContent()
            console.log(value);
        }

        await page.waitForTimeout(3000);
        
    })

