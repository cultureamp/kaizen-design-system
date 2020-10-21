import { addons } from "@storybook/addons"
import { isEmpty } from "lodash"
import TagManager from "react-gtm-module"

/**
 * This is inspired by the GA addon, but replacing GA for GTM and dropping custom events
 * https://github.com/storybookjs/storybook/blob/next/addons/google-analytics/src/register.ts
 */
addons.register("kaizen/gtm-addon", () => {
  const { analyticsGTM = {} } = addons.getConfig()

  if (isEmpty(analyticsGTM)) {
    // eslint-disable-next-line no-console
    console.warn("kaizen/gtm-addon - Analytics not set. Check manager.js")
    return
  }

  TagManager.initialize(analyticsGTM)
})
