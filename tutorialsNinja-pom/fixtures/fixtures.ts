import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { registerPage } from '../pages/registerPage';

type Fixtures = {
    homepage:HomePage
    registerpage : registerPage
    loginpage :LoginPage
}

export const test = base.extend<Fixtures>({

    homepage : async ({page},use) =>
    {
        await use(new HomePage(page))
    },

    registerpage : async ({page} , use)=>
    {
        await use(new registerPage(page))
    },
    loginpage : async({page} , use)=>
    {
        await use(new LoginPage(page))
    }
})
export { expect };

