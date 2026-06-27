import { expect, test } from "@playwright/test";

test ('drag' , async({page})=>
{
    await page.goto('https://jqueryui.com/droppable/')

    // console.log(page.frames())

    const myFrame = page.frames()[1]

    const dragElement = await myFrame?.locator('//p[contains(text(),"Drag")]')

    const targetElement = await myFrame?.locator('//p[contains(text(),"Drop")]')

    dragElement.dragTo(targetElement)

    expect(page.locator('//p[contains(text(),"Dropped!")]').isVisible() , 'notdropped')
})