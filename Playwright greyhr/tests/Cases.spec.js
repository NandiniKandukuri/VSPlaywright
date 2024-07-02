const {test,expect}= require('@playwright/test')

test.describe.serial("grehr testcases",async()=>{
test("1.Login to greythr Algoleap",async({page})=>{

    await page.goto('https://algoleaptechnologies.greythr.com/');
    await page.locator('//input[@id="username"]').fill('T0121');
    await page.locator('//input[@id="password"]').fill('Nandhu@123');
    await page.getByRole('button',{name:'Log in'}).click();
    
})

test("2. validate home page.",async({page})=>{
    await expect( page.locator('//h1[contains(@class,"text-secondary")]')).toBeVisible();
    console.log(await page.locator('//h1[contains(@class,"text-secondary")]').textContent())
})

//test("3. validate engage",async({page})=>{
    // await expect(page.locator(({ hasText: 'Engage' }))).toBeVisible();
    // console .log(await page.locator({hasText:  'Engage'} ))
//})

//test("4. validate  All Activities.",async({page})=>{
    //await expect( page.locator("//span[contains(@class,'ml-2')]")).toBeVisible();
   // console.log(await page.locator("//span[contains(@class,'ml-2')]"))
//})

//test("5. validate  Posts.",async({page})=>{
    //await page.locator("//span[contains(@class,'ml-2')]")
    //console.log('validite Posts')
//})



})