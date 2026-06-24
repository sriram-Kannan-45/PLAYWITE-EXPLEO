# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDemoBlaze.test.ts >> Login Test
- Location: tests\LoginDemoBlaze.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.flash.success')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.flash.success')

```

```yaml
- text:  Your password is invalid!
- link "×":
  - /url: "#"
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "Login Page" [level=2]
- heading "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages." [level=4]:
  - text: This is where you can log into the secure area. Enter
  - emphasis: tomsmith
  - text: for the username and
  - emphasis: SuperSecretPassword!
  - text: for the password. If the information is wrong you should see error messages.
- text: Username
- textbox "Username"
- text: Password
- textbox "Password"
- button " Login"
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | 
  3  | test('Login Test', async ({ page }) => {
  4  | 
  5  |     await page.goto(process.env.BASE_URL!);
  6  | 
  7  |     await page.fill('#username', process.env.NAME!);
  8  | 
  9  |     await page.fill('#password', process.env.PASSWORD!);
  10 | 
  11 |     console.log("URL:", process.env.BASE_URL);
  12 |     console.log("USERNAME:", process.env.NAME);
  13 |     console.log("PASSWORD:", process.env.PASSWORD);
  14 | 
  15 |     await page.click('button[type="submit"]');
  16 | 
> 17 |     await expect(page.locator('.flash.success')).toBeVisible();
     |                                                  ^ Error: expect(locator).toBeVisible() failed
  18 | });
```