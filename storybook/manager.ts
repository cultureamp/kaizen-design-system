// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/

// The following do not use the addons panel:
// import "@storybook/addon-viewport/register"

import { addons } from "@storybook/addons"
import KaizenTheme from "./theme"

addons.setConfig({
  theme: KaizenTheme,
  analyticsGTM: {
    gtmId: "GTM-KS4VWLT",
  },
})
