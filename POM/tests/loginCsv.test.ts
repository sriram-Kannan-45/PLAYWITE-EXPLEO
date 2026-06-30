
import { expect, test } from "../fixtures/baseFixture";
import { LoginUser, readLoginData } from "../utils/csvReader";

const users : LoginUser[] = readLoginData();

console.log('CSV Data:',users);

const validUser = users.find(user => user.type === 'valid')
const invalUser = users.find(user => user.type === 'invalid')


test.describe('Login Tests @CSV', ()=>
{
    test.beforeEach(async ( {loginPage})=>
    
    {
        await loginPage.navigate();
    })


    
    test('validLogin', async({loginPage , dashBoardPage})=>
    {

        if (!validUser) 
            
            {
                throw new Error("Valid  user not found in loginData.csv");
            }


        await loginPage.login(
        
            validUser.username,
            validUser.password
        )

        await expect(dashBoardPage.dashboardTitle).toBeVisible({timeout : 10000 })
    })

    test('invalidLogin' , async({loginPage})=>{

        if (!invalUser) 
            
            {
                throw new Error("Valid  user not found in loginData.csv");
            }

        await loginPage.login(
            invalUser?.username,
            invalUser?.password
        )

        await expect(loginPage.errorMessage).toHaveText('Invalid credentials')
    }


    )

})


