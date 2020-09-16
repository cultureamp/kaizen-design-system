import { Button, IconButton } from "@kaizen/draft-button"
import GenericButton, {
  AdditionalContentProps,
  GenericProps,
  LabelProps,
} from "@kaizen/draft-button/KaizenDraft/Button/components/GenericButton"
import { Menu, MenuContent, MenuItem, MenuItemProps } from "@kaizen/draft-menu"
import * as React from "react"
import {
  TitleBlockButtonProps,
  isMenuGroupNotButton,
  PrimaryActionProps,
  BadgeProps,
} from "./TitleBlockZen"
import Toolbar from "./Toolbar"
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"
const chevronDownIcon = require("@kaizen/component-library/icons/chevron-down.icon.svg")
  .default
const meatballsIcon = require("@kaizen/component-library/icons/meatballs.icon.svg")
  .default

const styles = require("./TitleBlockZen.scss")

type MainActionsProps = {
  primaryAction?: PrimaryActionProps
  defaultAction?: TitleBlockButtonProps
  reversed?: boolean
  overflowMenuItems?: MenuItemProps[]
  showOverflowMenu?: boolean
}

const renderBadge = (badge?: BadgeProps) => {
  if (!badge) return null
  return badge.animateChange ? (
    <BadgeAnimated variant="dark">{badge.text}</BadgeAnimated>
  ) : (
    <Badge variant="dark">{badge.text}</Badge>
  )
}

const ButtonAllowingAdditionalContent = (
  props: GenericProps & LabelProps & AdditionalContentProps
) => <GenericButton {...props} />

const MainActions = ({
  primaryAction,
  defaultAction,
  reversed = false,
  overflowMenuItems,
  showOverflowMenu = false,
}: MainActionsProps) => {
  let items
  if (primaryAction && isMenuGroupNotButton(primaryAction)) {
    const menuContent = (
      <MenuContent>
        {primaryAction.menuItems.map((item, idx) => (
          <MenuItem
            {...item}
            key={`main-action-primary-menu-item-${idx}`}
            automationId={`main-action-primary-menu-item-${idx}`}
          />
        ))}
      </MenuContent>
    )
    items = [
      ...(defaultAction
        ? [
            <Button
              {...defaultAction}
              data-automation-id="title-block-default-action-button"
            />,
          ]
        : []),
      ...(primaryAction
        ? [
            <Menu
              align="right"
              button={
                <ButtonAllowingAdditionalContent
                  label={primaryAction.label}
                  primary
                  reversed={reversed}
                  icon={chevronDownIcon}
                  iconPosition="end"
                  data-automation-id="title-block-primary-action-button"
                  additionalContent={renderBadge(primaryAction.badge)}
                />
              }
            >
              {menuContent}
            </Menu>,
          ]
        : []),
    ]
  } else {
    items = [
      ...(defaultAction
        ? [
            <Button
              {...defaultAction}
              data-automation-id="title-block-default-action-button"
            />,
          ]
        : []),
      ...(primaryAction
        ? [
            <ButtonAllowingAdditionalContent
              {...primaryAction}
              data-automation-id="title-block-primary-action-button"
              additionalContent={renderBadge(primaryAction.badge)}
            />,
          ]
        : []),
    ]
  }

  if (overflowMenuItems && showOverflowMenu && overflowMenuItems.length > 0) {
    items = [
      <Menu
        align="right"
        button={
          <IconButton label="" reversed={reversed} icon={meatballsIcon} />
        }
      >
        <MenuContent>
          {overflowMenuItems.map((menuItem, idx) => (
            <MenuItem
              {...menuItem}
              key={`main-action-overflow-item-menu-item-${idx}`}
            />
          ))}
        </MenuContent>
      </Menu>,
      ...items,
    ]
  }

  return (
    <div className={styles.mainActionsContainer}>
      <Toolbar items={items} />
    </div>
  )
}

export default MainActions
