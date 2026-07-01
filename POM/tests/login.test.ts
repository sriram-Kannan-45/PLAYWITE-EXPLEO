


import { expect, test } from '../fixtures/baseFixture';

import loginData from '../test-data/loginData.json';

test.describe('Login Tests @validAndinvalid', ()=>
{
    test.beforeEach(async ( {loginPage})=>
    
    {
        await loginPage.navigate();
    })

    test('invalidLogin' , async({loginPage})=>{
        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        )

        await expect(loginPage.errorMessage).toHaveText('Invalid credentials')
    }


    )

    test('validLogin', async({loginPage , dashBoardPage})=>
    {
        await loginPage.login(
        
            loginData.validUser.username,
            loginData.validUser.password
        )

        await expect(dashBoardPage.dashboardTitle).toBeVisible({timeout : 10000 })
    })

    
})


