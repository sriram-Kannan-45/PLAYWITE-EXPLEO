# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: jsonPara.test.ts >> Valid Login - admin
- Location: tests\jsonPara.test.ts:15:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#nameofuser')
Expected: visible
Received: hidden
Timeout:  10000ms

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('#nameofuser')
    23 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
       - unexpected value "hidden"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import loginData from '../test-data/loginData.json';
  3  | 
  4  | interface LoginData {
  5  |     testName: string;
  6  |     username: string;
  7  |     password: string;
  8  |     expectedResult: "Success" | "Failure";
  9  |     expectedMessage: string;
  10 | }
  11 | 
  12 | const users = loginData as LoginData[];
  13 | 
  14 | for (const data of users) {
  15 |     test(`${data.testName} - ${data.username || "blank user"}`, async ({ page }) => {
  16 | 
  17 |         await page.goto("https://www.demoblaze.com/");
  18 |         await page.click('#login2');
  19 |         await page.fill('#loginusername', data.username);
  20 |         await page.fill('#loginpassword', data.password);
  21 | 
  22 |         if (data.expectedResult === 'Failure')
  23 |         {
  24 |             page.once('dialog' , async dialog =>{
  25 |                 expect(dialog.message());
  26 |                 await dialog.accept()
  27 |             })
  28 | 
  29 |             await page.click('//button[text()="Log in"]')
  30 |         }
  31 | 
  32 |         if (data.expectedResult === 'Success')
  33 |         {
  34 |             await page.click('//button[text()="Log in"]')
  35 | 
> 36 |             await expect(page.locator('#nameofuser')).toBeVisible({
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  37 |                 timeout : 10000
  38 |             })
  39 |         }
  40 | 
  41 |     });
  42 | }
```