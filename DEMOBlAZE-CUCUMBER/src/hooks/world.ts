import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from '@playwright/test';

export class customWorld extends World
{
    page! : Page

    browser! : Browser

    context! : BrowserContext

}

setWorldConstructor(customWorld)