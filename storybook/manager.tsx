// This file is used by storybook to register installed addons.
// See: https://storybook.js.org/docs/addons/using-addons/
import React from "react"
import { addons } from "@storybook/addons"
import { defaultTheme } from "@kaizen/design-tokens"
import KaizenTheme from "./theme"

const colors = defaultTheme.color

addons.setConfig({
  theme: KaizenTheme,
  analyticsGTM: {
    gtmId: "GTM-KS4VWLT",
  },
  sidebar: {
    renderLabel: item => (
      <div style={item.type === "root" ? { color: colors.purple["800"] } : {}}>
        {item.name}
      </div>
    ),
  },
})
