import React, { useState } from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"

import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"

import { Button, IconButton } from "@kaizen/button"
import { Menu, MenuList, MenuItem, StatelessMenu } from ".."
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES } from "../../../storybook/constants"
import { MenuContentExample } from "./components/MenuContentExample"

export default {
  title: `${CATEGORIES.components}/Menu`,
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          'import { Menu, MenuList, MenuItem, StatelessMenu } from "@kaizen/draft-menu";',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=6262%3A1233"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = args => {
  const [menuValue, setMenuValue] = useState<string>("Set default Value")

  return (
    <Menu
      {...args}
      button={
        <Button label={menuValue} icon={chevronDown} iconPosition="end" />
      }
    >
      <MenuList>
        <MenuItem
          onClick={e => {
            e.preventDefault()
            setMenuValue("Menu item with onClick")
          }}
          label="Menu item with onClick"
        />
        <MenuItem
          href="/?path=/story/components-menu--default-story"
          label="Menu item with href"
        />
        <MenuItem
          action={e => {
            e.preventDefault()
            alert("This has been deprecated - use onClick")
            setMenuValue("Menu item with action (deprecated)")
          }}
          label="Menu item with action (deprecated)"
        />
      </MenuList>
    </Menu>
  )
}

DefaultStory.storyName = "Default (Kaizen Site Demo)"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Default", "Icon Button"]} />
    <StoryWrapper.Row rowTitle="Closed">
      <Menu
        button={
          <Button
            label="Select a value"
            icon={chevronDown}
            iconPosition="end"
            reversed={isReversed}
          />
        }
      >
        <MenuContentExample />
      </Menu>
      <Menu
        button={
          <IconButton label="" icon={meatballsIcon} reversed={isReversed} />
        }
      >
        <MenuContentExample />
      </Menu>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Open">
      <Menu
        menuVisible
        autoHide="off"
        button={
          <Button
            label="Select a value"
            icon={chevronDown}
            iconPosition="end"
            reversed={isReversed}
          />
        }
      >
        <MenuContentExample />
      </Menu>
      <Menu
        menuVisible
        autoHide="off"
        button={
          <IconButton label="" icon={meatballsIcon} reversed={isReversed} />
        }
      >
        <MenuContentExample />
      </Menu>
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"

StickerSheetDefault.decorators = [
  (StoryComponent: Story) => (
    <div style={{ minHeight: "500px" }}>
      <StoryComponent />
    </div>
  ),
]

StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }

StickerSheetReversed.decorators = [
  (StoryComponent: Story) => (
    <div style={{ minHeight: "500px" }}>
      <StoryComponent />
    </div>
  ),
]

StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
