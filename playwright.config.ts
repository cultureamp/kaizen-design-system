// playwright.config.ts
import { type PlaywrightTestConfig, devices } from "@playwright/test"

const BASE_URL = process.env.URL

const config: PlaywrightTestConfig = {
  testMatch: ["**/*.playwright.spec.ts?(x)"],
  retries: 1,
  use: {
    baseURL: `https://${BASE_URL}`,
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
