import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel : true ,
  
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
  browserName: 'chromium',
  headless: false,

  viewport: {
    width: 1920,
    height: 1200,
  },

  actionTimeout: 10 * 1000,
  navigationTimeout: 10 * 1000,

  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',

  ignoreHTTPSErrors: true,
  acceptDownloads: true,
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