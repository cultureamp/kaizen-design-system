import { default as React, ReactElement } from "react"

import { GenericMenuProps, render } from "./Menu"
import MenuDropdown from "./MenuDropdown"
const styles = require("./styles.scss")

export type StatelessMenuProps = {
  isMenuVisible: boolean
  toggleMenuDropdown: any // TODO!
  hideMenuDropdown: any
  renderButton: (args: {
    onClick: () => void
    onMouseDown: (e: any) => void
  }) => React.ReactElement
} & GenericMenuProps

export const StatelessMenu: React.FunctionComponent<StatelessMenuProps> = ({
  align = "left",
  automationId,
  renderButton,
  isMenuVisible,
  toggleMenuDropdown,
  hideMenuDropdown,
  children,
}) => {
  const dropdownButtonContainer = React.createRef<HTMLDivElement>()

  const menuButton = renderButton({
    onMouseDown: (e: any) => e.preventDefault(),
    onClick: () => {
      toggleMenuDropdown()
    },
  })
  return render({
    menuButton,
    isMenuVisible,
    automationId,
    dropdownButtonContainer,
    align,
    children,
    hideMenuDropdown,
  })
}

export default StatelessMenu
