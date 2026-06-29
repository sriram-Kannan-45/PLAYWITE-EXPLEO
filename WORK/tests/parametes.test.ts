import { expect, test } from "@playwright/test"

const searchData = [

    { word : 'iphone' , expectedResult : 'iphone'},
    { word : 'mac' , expectedResult : 'mac'},
    { word : 'samsung' , expectedResult : 'samsung'},
    
]

test.describe('tutorialNinja Workflow' , ()=>
{
    for (const data of searchData)
    {
        test(`Search Flow - ${data.word}`,async({page})=>
        {

            await page.goto('https://tutorialsninja.com/demo/')

            await page.getByPlaceholder('Search').fill(data.word)

            await page.keyboard.press('Enter');

            await expect(page.locator('(//h1)[2]')).toContainText(data.expectedResult)
            
        })
    }
})