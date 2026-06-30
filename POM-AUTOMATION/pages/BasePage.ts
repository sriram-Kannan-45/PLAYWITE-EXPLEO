import { Locator } from "@playwright/test";

export class BasePage {

    async jsClick(element: Locator): Promise<void> {
        await element.evaluate((el: HTMLElement) => {
            el.click();
        });
    }

    async jsFill(element: Locator, value: string) {
        await element.evaluate(
            (el, value) => (el as HTMLInputElement).value = value,
            value
        );
    }
}