import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

const envName = process.env.ENV || 'qa';

dotenv.config({
  path: `./env/.env.${envName}`
});

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

   reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright']
  ],

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'r',
    video: 'retain-on-failure',
    browserName : 'chromium'
  },

  
});