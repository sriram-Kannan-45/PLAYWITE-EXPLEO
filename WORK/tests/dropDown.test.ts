import { test } from "@playwright/test";

test('dropdown' , async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/dropdown')

    await page.selectOption('#dropdown' ,  {
    
        index : 2
    })
})