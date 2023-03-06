// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/
import { addons } from "@storybook/addons"
import KaizenTheme from "./theme"

addons.setConfig({
  theme: KaizenTheme,
  analyticsGTM: {
    gtmId: "GTM-KS4VWLT",
  },
})

const CSS_TO_HIDE_TEST_SECTION_FROM_SIDEBAR = `
  #stickersheets,
  *[data-parent-id*="stickersheets"],
  *[title*="Stickersheets"] {
    display: none !important;
  }
`

if (process.env.NODE_ENV !== "development") {
  const head = document.head || document.getElementsByTagName("head")[0]
  const style = document.createElement("style")
  head.appendChild(style)
  style.appendChild(
    document.createTextNode(CSS_TO_HIDE_TEST_SECTION_FROM_SIDEBAR)
  )
}
