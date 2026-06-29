import { expect, test } from "@playwright/test";

 test ('login 1 @valid' , async({page})=>
{
    await page.goto('https://www.demoblaze.com/')

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('admin')

    await page.locator('//button[text()="Log in"]').click()

    await expect(page.locator('//a[text()="Log out"]')).toBeVisible();



    await expect.soft(page.locator('//a[text()="Log out"]')).toHaveText('Log out');

    
    
})



 test('login 2 @valid ' , async({page})=>
{
    await page.goto('https://www.demoblaze.com/')

    

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('admin')

    await page.locator('//button[text()="Log in"]').click()

    await expect(page.locator('//a[text()="Log out"]')).toBeVisible();

    await expect(page.locator('//a[text()="Log out"]')).toHaveText('Log out');

    
    
})



 test ('login 3 @invalid' , async({page})=>
{
    await page.goto('https://www.demoblaze.com/')

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('admin')

    await page.locator('//button[text()="Log in"]').click()

    await expect(page.locator('//a[text()="Log out"]')).toBeVisible();

    await expect(page.locator('//a[text()="Log out"]')).toHaveText('Log out');

    
    
})


 test ('login 1 @valid @invalid' , async({page})=>
{
    await page.goto('https://www.demoblaze.com/')

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('admin')

    await page.locator('//button[text()="Log in"]').click()

    await expect(page.locator('//a[text()="Log out"]')).toBeVisible();



    await expect.soft(page.locator('//a[text()="Log out"]')).toHaveText('Log out');

    
    
})
