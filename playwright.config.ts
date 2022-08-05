// playwright.config.ts
import { type PlaywrightTestConfig, devices } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testMatch: ["**/*.playwright.spec.ts?(x)"],
  retries: 1,
  use: {
    baseURL: process.env.KAIZEN_DEV_BRANCH,
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

export default config
