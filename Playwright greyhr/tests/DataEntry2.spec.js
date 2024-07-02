const {test,expect}= require('@playwright/test')

test("DataEntry.spec.js",async({page})=>{

    await page.goto('https://algoleaptechnologies.greythr.com/');
    await page.locator('//input[@id="username"]').fill('T0121');
    await page.locator('//input[@id="password"]').fill('Nandhu@123');
    await page.getByRole('button',{name:'Log in'}).click();

    await page.getByRole('complementary').getByText(/^Attendance$/).click();
    await page.getByRole('complementary').getByText('Attendance info').click();
    await page.locator('//a[@class="text-4"]').click();

    for (let i=1;i<=6;i++)
        {
            await page.locator('(//input[@name="reason"])['+i+']').fill('forgot to swipe');
            console.log(i);
        }

          
})


// await page.locator('//span[contains(text(),"01 May ")]').toBeVisible();
    //                    ('//span[@title="A"] ') //Absent
    //                    ('//span[contains(@class,"text-5")]')//general shift
    //                    ('//td[@class="ng-star-inserted"]/..//div[@class="ng-star-inserted"]')
    //                    ('//p[contains(@class,"text-4)"] /..//td[@class="ng-star-inserted"]/..//div[@class="ng-star-inserted"]')

    //span[@title='A' or @title= 'P' or @title='H' or .='O']
    ////span[.="02"]/..//span[@title="p"]/..//span[contains(@class,"text-5")]
    //span[@title='A' or @title= 'P' or @title='H' or .='O']/../../../../*