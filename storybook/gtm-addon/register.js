import { addons } from "@storybook/addons"
import TagManager from "react-gtm-module"

/**
 * This is inspired by the GA addon, but replacing GA for GTM and dropping custom events
 * https://github.com/storybookjs/storybook/blob/next/addons/google-analytics/src/register.ts
 */
addons.register("my/design-addon", () => {
  TagManager.initialize({
    gtmId: "GTM-KS4VWLT",
  })
})
