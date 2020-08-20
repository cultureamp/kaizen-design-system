import { addons } from "@storybook/addons"
import TagManager from "react-gtm-module"
import { isEmpty } from "lodash"

/**
 * This is inspired by the GA addon, but replacing GA for GTM and dropping custom events
 * https://github.com/storybookjs/storybook/blob/next/addons/google-analytics/src/register.ts
 */
addons.register("kaizen/gtm-addon", () => {
  const { analyticsGTM = {} } = addons.getConfig()

  if (isEmpty(analyticsGTM)) {
    console.warn("kaizen/gtm-addon - Analytics not set. Check manager.js")
    return
  }

  TagManager.initialize(analyticsGTM)
})
