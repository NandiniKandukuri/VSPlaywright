const {test ,expect} = require('@playwright/test')
test("Handle dropdowns",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');

    //await page.locator("#country").selectOption({label:'India'});

   // await page.waitForTimeout(5000);

    //1.check number of options in dropdown
    //const options =await page.locator('#country option')
    //await expect(options).toHaveCount(10);

    //2.check number of options in dropdown
    //const options=await page.$$('#country option')
   // console.log("Number of options:",options.lenght)
  // await expect(options.length).toBe(10);

  //3.check presence of value in dropdown
 // const content= await page.locator('#country').textContent()
  //await expect(content.includes('India')).toBeTruthy();

 // await expect(content.includes('XYZ')).toBeTruthy();

 //4.check presence of value in the dropdown
 //const options =await page.$$('#country.option')
// for(const option of options)
   // {
       // console.log(await option.textContent())
 //   }

 const options =await page.$$('#country.option')
 //let status=false;
 for(const option of options)
    {
        let value = await option.textContent();
        if(value.includes('France'))
        {
           // status=true;
           await page.selectOption('#country',value);
            break;
        }

    }
      //expect(status).toBeTruthy();
      })


