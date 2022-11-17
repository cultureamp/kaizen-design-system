import { addons } from "@storybook/addons"
import { STORY_CHANGED } from "@storybook/core-events"
import isEmpty from "lodash.isempty"
import TagManager from "react-gtm-module"

declare global {
  interface Window {
    dataLayer: {
      push: ({ event }) => void
    }
  }
}

/**
 * This is inspired by the GA addon, but replacing GA for GTM and dropping custom events
 * https://github.com/storybookjs/storybook/blob/next/addons/google-analytics/src/register.ts
 */
addons.register("kaizen/gtm-addon", api => {
  const { analyticsGTM = {} } = addons.getConfig()
  if (isEmpty(analyticsGTM)) {
    // eslint-disable-next-line no-console
    console.warn("kaizen/gtm-addon - Analytics not set. Check manager.js")
    return
  }

  TagManager.initialize(analyticsGTM)

  api.on(STORY_CHANGED, () => {
    window.dataLayer.push({ event: "storybook-route-change" })
  })
})
