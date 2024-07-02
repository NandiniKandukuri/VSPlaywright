const {test,expect} = require('@playwright/test')
test('Assertions Test',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

  //1.expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  //2.expect(page).toHaveTitle()
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  //3.expect(locator).toBeVisible()
  const logoElement = await page.locator('.header-logo')
  await expect (logoElement).toBeVisible()

  //4.expect(locator).toBeEnabled()
  const searchStoreBox = await page.locator('#small.searchterms')
  await expect(searchStoreBox).toBeEnabled()

  //expect(locator).toBeDisabled()
  const searchstoreBox = await page.locator('#small search terms')
  await expect(searchstoreBox).toBeDisabled()

  //5.expect(locator).toBeChecked()
  //Radio Button
  const maleRadioButton = await page.locator('#gender-male')
  await maleRadioButton.click()
  await expect(maleRadioButton).toBeChecked()

  //check box
  const newslettercheckbox = await page.locator('#Newsletter')
  await expect(newslettercheckbox).toBeChecked()

  //////////not 
  //6.expect(locator).toHaveAttribute()
  const regButton = await page.locator('#register-button')
  await expect (regButton).toHaveAttribute('type','sudmit')

  //7.expect(locator).toHaveText()
  await expect (await page.locator('.page-title h1')).toHaveText('Register')

  //8.expect(locator).toContainText()
  await expect(await page.locator('.pape-title h1')).toContainText('Reg')

  //9.expect(locator).toHaveValue(value)
  const emailInput = await page.locator('#Email')
  await emailInput.fill('test@demo.com');
  await expect (emailInput).toHaveValue('test@demo.com')

  //10.expect(locator).toHaveCount()
  const options=await page.locator('select[name="date of month"]option')
  await expect(options).toHaveCount(13)


})