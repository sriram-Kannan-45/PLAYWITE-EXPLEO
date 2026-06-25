import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://official-wave-init-in.vercel.app/');
  await expect(page.getByRole('navigation').getByRole('link', { name: 'WAVE INIT' })).toBeVisible();

  await page.getByRole('button', { name: 'Toggle menu' }).click();
  await expect(page.getByRole('button', { name: 'Close menu' })).toBeVisible();

  await page.getByRole('link', { name: 'Contact' }).first().click();
  await expect(page.getByRole('heading', { name: 'Let\'s Build Something.' })).toBeVisible();

  await page.locator('input[name="name"]').click();
  await page.getByRole('textbox', { name: 'Your name' }).fill('sriram');
  await page.locator('input[name="email"]').click();
  await page.getByRole('textbox', { name: 'you@company.com' }).fill('titooram123@gmail.com');
  await page.getByRole('combobox').selectOption('chatbot');
  await page.locator('textarea[name="message"]').click();
  await page.getByRole('textbox', { name: 'Tell us about your project,' }).fill('hii its codegen');
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(page.locator('div').filter({ hasText: /^Message Sent Successfully!$/ })).toBeVisible();
});