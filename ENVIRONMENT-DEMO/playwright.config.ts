import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const envName = process.env.ENV || 'qa';

dotenv.config({
  path: `./env/.env.${envName}`,
});

export default defineConfig({
  testDir: './tests/',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

   reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
    ['allure-playwright']
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }
  ]
});