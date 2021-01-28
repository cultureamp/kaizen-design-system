import {
  Button,
  IconButton,
  GenericButton,
  AdditionalContentProps,
  GenericProps,
  LabelProps,
} from "@kaizen/draft-button"
import { Menu, MenuContent, MenuItem, MenuItemProps } from "@kaizen/draft-menu"
import * as React from "react"
import { Badge, BadgeAnimated } from "@kaizen/draft-badge"
import chevronDownIcon from "@kaizen/component-library/icons/chevron-down.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import styles from "../styles/TitleBlockZen.scss"
import Toolbar from "./Toolbar"
import {
  TitleBlockButtonProps,
  isMenuGroupNotButton,
  PrimaryActionProps,
  BadgeProps,
} from "./TitleBlockZen"

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
            {
              key: "defaultAction",
              node: (
                // @ts-ignore
                <Button
                  {...{
                    ...defaultAction,
                    reversed:
                      defaultAction.reversed !== undefined
                        ? defaultAction.reversed
                        : reversed,
                  }}
                  data-automation-id="title-block-default-action-button"
                />
              ),
            },
          ]
        : []),
      ...(primaryAction
        ? [
            {
              key: "primaryAction",
              node: (
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
                </Menu>
              ),
            },
          ]
        : []),
    ]
  } else {
    items = [
      ...(defaultAction
        ? [
            {
              key: "defaultAction",
              node: (
                // @ts-ignore
                <Button
                  {...{
                    ...defaultAction,
                    reversed:
                      defaultAction.reversed !== undefined
                        ? defaultAction.reversed
                        : reversed,
                  }}
                  data-automation-id="title-block-default-action-button"
                />
              ),
            },
          ]
        : []),
      ...(primaryAction
        ? [
            {
              key: "primaryAction",
              node: (
                // @ts-ignore
                <ButtonAllowingAdditionalContent
                  // Temporary grossness before we deprecate a mandatory
                  // optional field for primary in PrimaryActionProps
                  {...{
                    ...primaryAction,
                    primary:
                      primaryAction.primary !== undefined
                        ? primaryAction.primary
                        : true,
                    reversed:
                      primaryAction.reversed !== undefined
                        ? primaryAction.reversed
                        : reversed,
                  }}
                  data-automation-id="title-block-primary-action-button"
                  additionalContent={renderBadge(primaryAction.badge)}
                />
              ),
            },
          ]
        : []),
    ]
  }

  if (overflowMenuItems && showOverflowMenu && overflowMenuItems.length > 0) {
    items = [
      {
        key: "overflowMenu",
        node: (
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
          </Menu>
        ),
      },
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
