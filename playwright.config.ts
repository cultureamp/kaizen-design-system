// playwright.config.ts
import { type PlaywrightTestConfig, devices } from "@playwright/test"

const { IS_DEV } = process.env
const LOCALHOST = "http://localhost:6006/"
const BASE_URL = IS_DEV ? LOCALHOST : `https://${process.env.URL}`

const devConfig: PlaywrightTestConfig = {
  webServer: {
    command: "pnpm storybook",
    url: LOCALHOST,
    timeout: 120 * 1000000,
    reuseExistingServer: true,
  },
}

const config: PlaywrightTestConfig = {
  testMatch: ["**/*.playwright.spec.ts?(x)"],
  retries: IS_DEV ? 0 : 1,
  use: {
    baseURL: BASE_URL,
    trace: IS_DEV ? "on-first-retry" : "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  outputDir: "./playwright/test-results",
  ...(IS_DEV ? devConfig : {}),
}

export default config
