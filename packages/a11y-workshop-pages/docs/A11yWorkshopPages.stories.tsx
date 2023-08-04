import React, { useEffect, useState } from "react"
import { StoryFn } from "@storybook/react"
import { Admin as AdminPage, Settings as SettingsPage } from "../src/"

export default {
  tags: ["autodocs"],
  title: "Culture Amp",
  decorators: [
    (StoryComponent: StoryFn) => (
      <div style={{ margin: "-1rem", minHeight: "1200px" }}>
        <StoryComponent />
      </div>
    ),
  ],
}

export const Admin: StoryFn = () => {
  useEffect(() => {
    window.document.title = "Culture Amp"
  }, [])
  const [adminPageActive, setAdminPageActive] = useState<boolean>(false)
  const onNavPress = (page: string): void => {
    if (page === "settings") {
      setAdminPageActive(false)
    } else if (page === "admin") {
      setAdminPageActive(true)
    }
  }

  if (adminPageActive) {
    return <AdminPage onNavPress={onNavPress} />
  }

  return <SettingsPage onNavPress={onNavPress} />
}

Admin.parameters = {
  backgrounds: { default: "Gray 100" },
  chromatic: { disable: false },
}
Admin.storyName = "Culture Amp"
