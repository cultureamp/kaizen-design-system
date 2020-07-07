import { default as React, ReactElement, useRef } from "react"

import { GenericMenuProps, render } from "./Menu"
const styles = require("./styles.scss")

export type StatelessMenuProps = {
  isMenuVisible: boolean
  toggleMenuDropdown: () => void
  hideMenuDropdown: () => void
  renderButton: (args: {
    onClick: (e: any) => void
    onMouseDown: (e: any) => void
  }) => React.ReactElement
}

export type Props = StatelessMenuProps & GenericMenuProps

export const StatelessMenu: React.FunctionComponent<Props> = (props: Props) => {
  const dropdownButtonContainer = useRef(null)

  const menuButton = props.renderButton({
    onMouseDown: (e: any) => e.preventDefault(),
    onClick: (e: any) => {
      e.stopPropagation()
      props.toggleMenuDropdown()
    },
  })
  return render({ ...props, dropdownButtonContainer, menuButton })
}

export default StatelessMenu
