const {test ,expect} = require ('@playwrigth/est')
test('Built-inlocators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/Login')
    const logo =await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()


   // await page.getByplaceholder('username').fill("Admin")
   // await page.getByplaceholder('password').fill("adin123")

   // await page.getByRole('button',{type:'sudmit'}).click()

    await expect(await page.getByText('vishwas dsadsasdfs')).toBeVisible()

    await expect(await page.getByText(name)).ToBeVisible()
})