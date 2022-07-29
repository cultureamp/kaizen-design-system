// playwright.config.ts
import { type PlaywrightTestConfig, devices } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testMatch: ["**/*.playwright.spec.ts?(x)"],
  webServer: {
    command: "yarn storybook",
    url: process.env.KAIZEN_DOMAIN_NAME || "http://localhost:6006/",
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
}

export default config
