const{test,expect}=require('@playwright/test');
test('Practice',async({page})=>{

    await page .goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html');
    await page.locator('//table[@id="contactList"]/tbody/tr[1]').highlight();
    await page.locator('(//table[@id="contactList"]/tbody/tr/td)[8]').highlight();
})