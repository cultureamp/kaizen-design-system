import React from "react"
import { addons, types } from "@storybook/addons"
import { AddonPanel } from "@storybook/components"
import { App } from "./addon"
import { ADDON_ID } from "./constants"

const PANEL_ID = `${ADDON_ID}/panel`

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Theme",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <App />
      </AddonPanel>
    ),
  })
})
