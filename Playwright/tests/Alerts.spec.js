const {test,expect}= require('@playwright/test')
test ('Alert with ok',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.click('//button[normalize-space()="Alert"]');
});

test('confirmation Dialog-Alert with ok and cancel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspots.com');

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('press a button')
        await dialog.accept();

    })
    await page.click('//button[normalize-space()="confirmBox"]')
    await expect(page.locator('//p[@id="demo"]')).toHaveText('you pressed ok!')
});