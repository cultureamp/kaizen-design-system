// playwright.config.ts
import { type PlaywrightTestConfig, devices } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testMatch: ["**/*.playwright.spec.ts?(x)"],
  webServer: {
    command: "yarn storybook",
    url: "http://localhost:6006/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:6006/",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
}

export default config
