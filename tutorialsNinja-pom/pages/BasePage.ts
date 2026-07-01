import { Locator } from "@playwright/test";

export class BasePage {

    async jsClick(element: Locator): Promise<void> {
        await element.evaluate((el: HTMLElement) => {
            el.click();
        });
    }
}