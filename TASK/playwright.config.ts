import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 60 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
    ['allure-playwright']
  ],

  use: {
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'retain-on-failure',
  },

  // projects: [
  //   {
  //     name: 'chromium',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //     },
  //   },
  //   {
  //     name: 'firefox',
  //     use: {
  //       ...devices['Desktop Firefox'],
  //     },
  //   },
  //   {
  //     name: 'webkit',
  //     use: {
  //       ...devices['Desktop Safari'],
  //     },
  //   },
  // ],
});