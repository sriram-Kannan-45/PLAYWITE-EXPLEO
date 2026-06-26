import { test } from '@playwright/test'

test ('DropDown' , async ({page}) => {

    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/")

    await page.selectOption("#select-demo" , {
        // index : 7
        value : 'Wednesday'
    })

    await page.waitForTimeout(4000)

    await page.selectOption("#multi-select" , [

            {
                index : 2
            } ,
            
            {
                index : 1
            }


    ]
    ) ;
})