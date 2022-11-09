import { ButtonProps } from "@kaizen/button"
import React, { useState } from "react"
import StatelessMenu, { StatelessMenuProps } from "./StatelessMenu"

type ButtonPropsWithOptionalAria = ButtonProps & {
  "aria-haspopup"?: boolean
  "aria-expanded"?: boolean
}

export type MenuProps = Omit<
  StatelessMenuProps,
  "renderButton" | "hideMenuDropdown" | "toggleMenuDropdown" | "isMenuVisible"
> & {
  /**
   * The initial state of the dropdown. Once initalised, further changes to this
   * prop will not have any affect, as the state is handled internally to the component.
   * @default: false
   */
  menuVisible?: boolean
  /**
   * Takes any ReactElement with button props but is most commonly used with a Kaizen `<Button>` or `<IconButton>` component.
   */
  button: React.ReactElement<ButtonPropsWithOptionalAria>
}

/**
 * {@link https://cultureamp.design/components/menu/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-menu--auto-hide-behaviours Storybook}
 */
const Menu: React.FunctionComponent<MenuProps> = ({
  button,
  menuVisible = false,
  ...rest
}) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(menuVisible)

  const toggleMenuDropdown = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const hideMenuDropdown = () => {
    setIsMenuVisible(false)
  }

  return (
    <StatelessMenu
      {...rest}
      isMenuVisible={isMenuVisible}
      toggleMenuDropdown={toggleMenuDropdown}
      hideMenuDropdown={hideMenuDropdown}
      // `StatelessMenu` is one of the newer components, so it uses a render function,
      // as opposed to `React.cloneElement`.
      // `cloneElement` has its problems, mainly because it's somewhat magical, can lead
      // to unexpected behaviour, and it doesn't self document. Hence, the switch
      // to the render function. It would be nice if the `Menu` component also
      // used this pattern, but it's probably not worth the time and effort.
      renderButton={props =>
        React.cloneElement(button, {
          ...props,
          onClick: (e: React.MouseEvent<Element, MouseEvent>) => {
            props.onClick(e)
            button.props.onClick?.(e)
          },
          onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => {
            props.onMouseDown(e)
            button.props.onMouseDown?.(e)
          },
        })
      }
    />
  )
}

export default Menu
