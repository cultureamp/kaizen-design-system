import * as React from "react"
import { Sidebar, SidebarTab } from "./SidebarAndContent"

type GuidelinesSidebarProps = {
  currentPath?: string
}

const GuidelinesSidebar: React.SFC<GuidelinesSidebarProps> = ({
  currentPath = "",
}) => (
  <Sidebar>
    <SidebarTab active={/^\/guidelines\/overview/.test(currentPath)}>
      Overview
    </SidebarTab>
    <SidebarTab active={/^\/guidelines\/color/.test(currentPath)}>
      Color
    </SidebarTab>
    <SidebarTab active={/^\/guidelines\/typography/.test(currentPath)}>
      Typography
    </SidebarTab>
    <SidebarTab active={/^\/guidelines\/icons/.test(currentPath)}>
      Icons
    </SidebarTab>
    <SidebarTab active={/^\/guidelines\/localization/.test(currentPath)}>
      Localization
    </SidebarTab>
    <SidebarTab active={/^\/guidelines\/animation/.test(currentPath)}>
      Animation
    </SidebarTab>
    <SidebarTab active={/^\/guidelines\/language/.test(currentPath)}>
      Product language style guide
    </SidebarTab>
  </Sidebar>
)

export default GuidelinesSidebar
