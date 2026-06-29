import { test } from "@playwright/test"

test.beforeEach('url' , async({page}) =>{

    await page.goto('https://demoqa.com/radio-button')
    
})
test.describe('radio' , ()=>
{
    test('visible then check @visible' , async({page})=>
    {
        const ratioCount = await page.locator('//input[@type="radio"]').count()

        console.log(ratioCount)


        
        const first = await page.locator('//input[@type="radio"]').first()

        if (await first.isVisible())
        {
           await first.click()
        }

        console.log(await page.locator('//input[@type="radio"]').last().isDisabled())

        // await page.locator('//input[@type="radio"]').last().click()


        
        await page.locator('//input[@type="radio"]').nth(1).click()

        await first.setChecked(false);

console.log(`after the setChecked : ${await first.isChecked()}`);



        
    } )

})