import React, { useState } from "react"
import { Admin as AdminPage, Settings as SettingsPage } from "../src/"

export default {
  title: "Culture Amp",
  decorators: [
    Story => (
      <div style={{ margin: "-1rem", minHeight: "1200px" }}>
        <Story />
      </div>
    ),
  ],
}

export const Admin = () => {
  const [adminPageActive, setAdminPageActive] = useState<boolean>(false)

  if (adminPageActive) {
    return <AdminPage onNavPress={() => setAdminPageActive(false)} />
  }

  return <SettingsPage onNavPress={() => setAdminPageActive(true)} />
}

Admin.parameters = {
  backgrounds: { default: "Gray 100" },
}
Admin.storyName = "Culture Amp"
Admin.args = { accessibilityAntiPatterns: false }
