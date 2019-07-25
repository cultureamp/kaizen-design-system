import * as React from "react"
import { Sidebar, SidebarTab } from "./SidebarAndContent"

type ComponentsSidebarProps = {
  currentPath?: string
}

const ComponentsSidebar: React.SFC<ComponentsSidebarProps> = ({
  currentPath = "",
}) => (
  <Sidebar>
    <SidebarTab active={/^\/components\/component-one/.test(currentPath)}>
      Component One
    </SidebarTab>
    <SidebarTab active={/^\/components\/component-two/.test(currentPath)}>
      Component Two
    </SidebarTab>
  </Sidebar>
)

export default ComponentsSidebar
