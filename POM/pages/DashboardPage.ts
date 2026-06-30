import { Locator, Page } from "@playwright/test";

export class DashboardPage {

    readonly page: Page;
    readonly dashboardTitle: Locator;
    readonly quickLaunch: Locator;
    readonly myActions: Locator;
    readonly timeAtWorkCard: Locator;
    readonly user: Locator;
    readonly logout: Locator;

    constructor(page: Page) {
        this.page = page;

        this.dashboardTitle = page.getByRole("heading", { name: "Dashboard" });
        this.quickLaunch = page.getByText("Quick Launch");
        this.myActions = page.getByText("My Actions");
        this.timeAtWorkCard = page.getByText("Time at Work");
        this.user = page.locator(".oxd-userdropdown-icon");
        this.logout = page.getByRole("menuitem", { name: "Logout" });
    }

    async logOut() {
        await this.user.click();
        await this.logout.click();
    }
}