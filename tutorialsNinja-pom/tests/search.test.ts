

import { test } from '../fixtures/fixtures'
import datajason from '../test-data/datajason.json'
test.describe('login' ,()=>
{
    test.beforeEach('usl', async({page})=>
    {
        await page.goto(process.env.URL!)
    })
    test('validlogin' , async({loginpage})=>
    {
        await loginpage.login(datajason.validtest.email,datajason.validtest.password)
    })
})