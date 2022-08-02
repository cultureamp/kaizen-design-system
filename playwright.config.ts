// playwright.config.ts
import { type PlaywrightTestConfig, devices } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testMatch: ["**/*.playwright.spec.ts?(x)"],
  webServer: {
    command: "yarn storybook",
    url: process.env.KAIZEN_DEV_BRANCH || "http://localhost:6006/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  retries: 1,
  use: {
    baseURL: "http://localhost:6006/",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  outputDir: "./playwright/test-results",
}

export default config
