const{test,expect}=require('@playwright/test');
test('Practice',async({page})=>{

    //await page.goto('https://www.w3schools.com/');
    //await page.locator('//a[@id="navbtn_exercises"]').heighlight();

    await page .goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html');
    await page .locator('//input[@maxlength="10"]').fill('Nandini');
    await page.locator('//input[@maxlength!="10"]').fill('Kandukuri');
    await page.locator('//input[@maxlength<="15"]').highlight();
    await page.locator('//input[@maxlength<"15"]').highlight();
    await page.locator('//input[@maxlength>"15"]').highlight();
    //we have to commend any of one from 11 or 12 lines to high light
    //if we want both lines are highlighted so do commend 11&12

    await page.locator('//input[@maxlength<="15" and @name="name" and @type="text"]');
    await page.locator('//input[@maxlength<="15" or @name="name" or @type="text"]');
   // const count = await page.locator('//input[@maxlength<="1" and @name="namee" and @type="textg"]').count();
    //const name= await page.locator('//input[@maxlength<="15" or @name="namegg" or @type="tt"]').count();
    console.log(await page.locator('//input[@maxlength<="15" and @name="name" and @type="text"]'));


})