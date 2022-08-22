// playwright.config.ts
import { type PlaywrightTestConfig } from "@playwright/test"

import config from "./playwright.config"

const LOCALHOST = "http://localhost:6006/"

const devConfig: PlaywrightTestConfig = {
  ...config,
  webServer: {
    command: "yarn storybook",
    url: LOCALHOST,
    timeout: 120 * 1000,
  },
}

if (devConfig) {
  devConfig.retries = 1
  devConfig.use = {
    ...devConfig.use,
    baseURL: LOCALHOST,
    trace: "on-first-retry",
  }
}

export default devConfig
