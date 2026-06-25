# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.test.ts >> test
- Location: tests\demo.test.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe[name="a-3em5t8z7yh73"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' })
    - waiting for" https://www.google.com/search?sca_esv=369c93141247d39f&q=What+are+some+of+the+most+iconic+football+fan+celebrations+around+the+world%3F&udm=50&oi=ddle&noiga=1&ct=460194320&peek_pws=0&aep=84&sa=X&ved=…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fsca_esv%3D369c93141247d39f%26q%3DWhat%2Bare%2Bsome%2Bof%2Bthe%2Bmost%2Biconic%2Bfootball%2Bfan%2Bcelebrations%2Baround%2Bth…"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - separator [ref=e3]
    - iframe [ref=e8]:
      - generic [ref=f2e2]:
        - generic [ref=f2e3]:
          - checkbox "I'm not a robot" [ref=f2e7]
          - generic [ref=f2e10]: I'm not a robot
        - generic [ref=f2e14]: reCAPTCHA
    - separator [ref=e9]
    - generic [ref=e10]:
      - text: About this page
      - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
      - link "Why did this happen?" [ref=e11] [cursor=pointer]:
        - /url: "#"
      - generic [ref=e12]:
        - text: "IP address: 49.206.117.252"
        - text: "Time: 2026-06-25T05:11:02Z"
        - text: "URL: https://www.google.com/search?sca_esv=369c93141247d39f&q=What+are+some+of+the+most+iconic+football+fan+celebrations+around+the+world%3F&udm=50&oi=ddle&noiga=1&ct=460194320&peek_pws=0&aep=84&sa=X&ved=0ahUKEwjTrZSk0KGVAxVbR2wGHQ-6DJUQPQgG&biw=1280&bih=720&dpr=1&sei=ZLg8aumPHNWRxc8Py_SDqAE"
  - iframe [active] [ref=e16]:
    - dialog [ref=f5e3]:
      - generic [ref=f5e4]:
        - generic [ref=f5e9]:
          - text: Select all images with
          - strong [ref=f5e10]: cars
          - generic [ref=f5e11]: Click verify once there are none left
        - table [ref=f5e14]:
          - rowgroup [ref=f5e15]:
            - row [ref=f5e16]:
              - button [ref=f5e17]
              - button [ref=f5e20]
              - button [ref=f5e23]
            - row [ref=f5e26]:
              - button [ref=f5e27]
              - button [ref=f5e30]
              - button [ref=f5e33]
            - row [ref=f5e36]:
              - button [ref=f5e37]
              - button [ref=f5e40]
              - button [ref=f5e43]
        - generic [ref=f5e47]: Please select all matching images.
      - generic [ref=f5e51]:
        - generic [ref=f5e52]:
          - button "Get a new challenge" [ref=f5e54] [cursor=pointer]
          - button "Get an audio challenge" [ref=f5e56] [cursor=pointer]
          - button "Help" [ref=f5e58] [cursor=pointer]
        - button "Verify" [active] [ref=f5e60] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.google.com/?zx=1782364199859');
  5  |   await expect(page.getByRole('link', { name: 'World Cup 2026: Knee slide' })).toBeVisible();
  6  | 
  7  |   await page.getByRole('combobox', { name: 'Search' }).click();
  8  |   await page.getByRole('combobox', { name: 'Search' }).fill('hiii');
  9  |   await expect(page.getByRole('option', { name: 'hiiipower' })).toBeVisible();
  10 | 
  11 |   await page.locator('div').filter({ hasText: 'What\'s on your mind?' }).nth(1).click();
> 12 |   await page.locator('iframe[name="a-3em5t8z7yh73"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
     |                                                                                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  13 |   await expect(page.locator('iframe[name="c-3em5t8z7yh73"]').contentFrame().getByRole('button', { name: 'Get a new challenge' })).toBeVisible();
  14 | 
  15 |   await page.locator('iframe[name="c-3em5t8z7yh73"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  16 |   await expect(page.locator('iframe[name="c-3em5t8z7yh73"]').contentFrame().getByText('Please select all matching')).toBeVisible();
  17 | });
```