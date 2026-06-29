

import { test } from "@playwright/test";

test.describe('LOGIN @valid' , ()=>{

    test.beforeEach('URL' , async({page})=>{

        await page.goto('https://www.demoblaze.com/')
    }
    )
    test ('valid' , async({page})=>
{
    

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('admin')

    await page.locator('//button[text()="Log in"]').click()

    
})

test ('invalid' , async({page})=>
{

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('')

    page.once('dialog' , async(alert) => {

        alert.accept()
    })

    await page.locator('//button[text()="Log in"]').click()



})


})


test.describe('LOGIN 2' , ()=>{

    test.beforeEach('URL' , async({page})=>{

        await page.goto('https://www.demoblaze.com/')
    }
    )
    test ('valid' , async({page})=>
{
    

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('admin')

    await page.locator('//button[text()="Log in"]').click()

    
})

test ('invalid' , async({page})=>
{

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('')

    page.once('dialog' , async(alert) => {

        alert.accept()
    })

    await page.locator('//button[text()="Log in"]').click()



})


})



test.describe('LOGIN 3' , ()=>{

    test.beforeEach('URL' , async({page})=>{

        await page.goto('https://www.demoblaze.com/')
    }
    )
    test('valid' , async({page})=>
{
    

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('admin')

    await page.locator('//button[text()="Log in"]').click()

    
})

test ('invalid' , async({page})=>
{

    await page.locator('//a[text()="Log in"]').click()

    await page.locator('#loginusername').fill('admin')

    await page.locator('#loginpassword').fill('')

    page.once('dialog' , async(alert) => {

        alert.accept()
    })

    await page.locator('//button[text()="Log in"]').click()



})


})