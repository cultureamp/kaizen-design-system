import React from "react"
import { addons, types } from "@storybook/addons"
import { AddonPanel } from "@storybook/components"
import { App, ADDON_ID } from "./addon"

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
