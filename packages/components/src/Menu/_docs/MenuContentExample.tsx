import React from "react"
import { DuplicateIcon, EditIcon, TrashIcon } from "~components/Icon"
import { MenuHeading } from "../subcomponents/MenuHeading"
import { MenuItem } from "../subcomponents/MenuItem"
import { MenuList } from "../subcomponents/MenuList"

interface MenuContentExampleProps {
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
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ): void => {
              alert("Hello")
              e.preventDefault()
            }}
            icon={<EditIcon role="presentation" />}
            label="Menu button"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ): void => {
              e.preventDefault()
            }}
            icon={<DuplicateIcon role="presentation" />}
            label="Menu button but the label is too long"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ): void => {
              e.preventDefault()
            }}
            icon={<TrashIcon role="presentation" />}
            destructive
            label="Destructive Menu button"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ): void => {
              e.preventDefault()
            }}
            icon={<TrashIcon role="presentation" />}
            disabled
            label="Disabled Menu button"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ): void => {
              e.preventDefault()
            }}
            icon={<TrashIcon role="presentation" />}
            disabled
            destructive
            label="Disabled Destructive Menu button"
          />
        </MenuList>
        <MenuList heading={<MenuHeading>Buttons (no icons)</MenuHeading>}>
          <MenuItem
            onClick={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
            ): void => {
              e.preventDefault()
            }}
            label="Menu button no icons"
          />
          <MenuItem
            onClick={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>
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
