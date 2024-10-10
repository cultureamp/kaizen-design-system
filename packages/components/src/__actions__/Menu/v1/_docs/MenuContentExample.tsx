import React from "react"
import { Icon } from "~components/__future__/Icon"
import { MenuHeading } from "../subcomponents/MenuHeading"
import { MenuItem } from "../subcomponents/MenuItem"
import { MenuList } from "../subcomponents/MenuList"

type MenuContentExampleProps = {
  isShortList?: boolean
}

/**
 * This is an mocked example of a Menu's children using all of the subcomponents.
 */
export const MenuContentExample = ({
  isShortList,
}: MenuContentExampleProps): JSX.Element => (
  <>
    <MenuList heading={<MenuHeading>Links</MenuHeading>}>
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
      <MenuItem href="https://www.cultureamp.com/" label="Menu link" />
    </MenuList>

    {!isShortList && (
      <>
        <MenuList heading={<MenuHeading>Buttons</MenuHeading>}>
          <MenuItem
            onClick={(
              e: React.MouseEvent<
                HTMLButtonElement | HTMLAnchorElement,
                MouseEvent
              >
            ): void => {
              alert("Hello")
              e.preventDefault()
            }}
            icon={<Icon name="edit" isPresentational isFilled />}
            label="Menu button"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<
                HTMLButtonElement | HTMLAnchorElement,
                MouseEvent
              >
            ): void => {
              e.preventDefault()
            }}
            icon={<Icon name="content_copy" isPresentational isFilled />}
            label="Menu button but the label is too long"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<
                HTMLButtonElement | HTMLAnchorElement,
                MouseEvent
              >
            ): void => {
              e.preventDefault()
            }}
            icon={<Icon name="delete" isPresentational isFilled />}
            destructive
            label="Destructive Menu button"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<
                HTMLButtonElement | HTMLAnchorElement,
                MouseEvent
              >
            ): void => {
              e.preventDefault()
            }}
            icon={<Icon name="delete" isPresentational isFilled />}
            disabled
            label="Disabled Menu button"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<
                HTMLButtonElement | HTMLAnchorElement,
                MouseEvent
              >
            ): void => {
              e.preventDefault()
            }}
            icon={<Icon name="delete" isPresentational isFilled />}
            disabled
            destructive
            label="Disabled Destructive Menu button"
          />
        </MenuList>
        <MenuList heading={<MenuHeading>Buttons (no icons)</MenuHeading>}>
          <MenuItem
            onClick={(
              e: React.MouseEvent<
                HTMLButtonElement | HTMLAnchorElement,
                MouseEvent
              >
            ): void => {
              e.preventDefault()
            }}
            label="Menu button no icons"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<
                HTMLButtonElement | HTMLAnchorElement,
                MouseEvent
              >
            ): void => {
              e.preventDefault()
            }}
            disabled
            label="Disabled button no icon"
          />
        </MenuList>
      </>
    )}
  </>
)
