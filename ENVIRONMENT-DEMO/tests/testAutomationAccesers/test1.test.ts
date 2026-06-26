import { chromium, expect, test } from '@playwright/test';

test('Automation Practice Form', async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.getByPlaceholder('First Name').fill('Sriram');

    await page.getByPlaceholder('Last Name').fill('Titoo');

    await page.getByPlaceholder('name@example.com').fill('demo@gmail.com');

    await page.locator('#gender-radio-1').check();

    await page.locator('#userNumber').fill('6381102874');

    await page.locator('#dateOfBirthInput').click();

    await page.locator('.react-datepicker__month-select').selectOption('5');

    await page.locator('.react-datepicker__year-select').selectOption('2026');

    await page.locator('.react-datepicker__day--025:not(.react-datepicker__day--outside-month)').click();

    await page.locator('#subjectsInput').fill('English');

    await page.locator('#subjectsInput').press('Enter');

    await page.locator('#hobbies-checkbox-3').check();

    await page.locator('#uploadPicture').setInputFiles(
  'D:/PLAYWITE-EXPLEO/ENVIRONMENT-DEMO/T2A9487.jpg.jpeg'
);

    await page.getByPlaceholder('Current Address').fill('Hi, how are you?');

    await page.locator('#state').click();

    await page.locator('#react-select-3-input').fill('NCR');

    await page.locator('#react-select-3-input').press('Enter');

    await page.locator('#city').click();

    await page.locator('#react-select-4-input').fill('Delhi');

    await page.locator('#react-select-4-input').press('Enter');

    await page.locator('#submit').click();

    const actual = await page.getByText('Thanks for submitting the form').textContent()

    await expect(actual).toContain('Thanks for submitting the form')

});