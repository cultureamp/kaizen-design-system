import { default as React, ReactElement } from "react"

import { GenericMenuProps, render } from "./Menu"
import MenuDropdown from "./MenuDropdown"
const styles = require("./styles.scss")

export type StatelessMenuProps = {
  isMenuVisible: boolean
  toggleMenuDropdown: () => void
  hideMenuDropdown: () => void
  renderButton: (args: {
    onClick: () => void
    onMouseDown: (e: any) => void
  }) => React.ReactElement
}

export type Props = StatelessMenuProps & GenericMenuProps

export const StatelessMenu: React.FunctionComponent<Props> = (props: Props) => {
  const dropdownButtonContainer = React.createRef<HTMLDivElement>()

  const menuButton = props.renderButton({
    onMouseDown: (e: any) => e.preventDefault(),
    onClick: () => {
      props.toggleMenuDropdown()
    },
  })
  return render({ ...props, dropdownButtonContainer, menuButton })
}

export default StatelessMenu
