// playwright.config.ts
import { type PlaywrightTestConfig, devices } from "@playwright/test"

const LOCALHOST = "http://localhost:6006/"

const config: PlaywrightTestConfig = {
  testMatch: ["**/*.playwright.spec.ts?(x)"],
  retries: 1,
  use: {
    baseURL: process.env.KAIZEN_DEV_BRANCH || LOCALHOST,
    trace: process.env.KAIZEN_DEV_BRANCH ? "on-first-retry" : "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  outputDir: "./playwright/test-results",
}

if (process.env.KAIZEN_DEV_BRANCH === undefined) {
  config.webServer = {
    command: "yarn storybook",
    url: LOCALHOST,
    timeout: 120 * 1000,
  }
}

export default config
