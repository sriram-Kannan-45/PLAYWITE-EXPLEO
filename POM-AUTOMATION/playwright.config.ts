import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment
const envName = process.env.ENV || 'qa';

dotenv.config({
  path: path.resolve(__dirname, `env/.env.${envName}`),
});

console.log(`Environment: ${envName}`);
console.log(`URL: ${process.env.URL}`);

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    baseURL: process.env.URL,

    browserName: 'chromium',

    headless: false,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },
});