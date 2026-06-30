import { test as base, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { HeaderPage } from '../pages/HeaderPage';
import { LoginPage } from '../pages/LoginPage';


type Fixtures = {
    loginPage : LoginPage,
    dashBoardPage : DashboardPage,
    headerPage : HeaderPage
}

export const test = base.extend<Fixtures>({

    loginPage : async ({page} , use) =>{
        await use(new LoginPage(page))
    },

    dashBoardPage : async ({page} , use)=>
    {
        await use(new DashboardPage(page))
    }
,
    headerPage : async ({page} , use)=>
    {
        await use(new HeaderPage(page))
    }
})

export { expect };

