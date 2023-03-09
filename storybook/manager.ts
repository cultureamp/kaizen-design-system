/* eslint-disable ssr-friendly/no-dom-globals-in-module-scope */
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

const body = document.body || document.getElementsByTagName("body")[0]
body.classList.add(process.env.NODE_ENV || "development")
