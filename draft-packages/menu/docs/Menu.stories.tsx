import React from "react"
import { ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Button, IconButton } from "@kaizen/button"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import meatballsIcon from "@kaizen/component-library/icons/meatballs.icon.svg"
import trashIcon from "@kaizen/component-library/icons/trash.icon.svg"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { figmaEmbed } from "../../../storybook/helpers"
import { Menu, MenuList, MenuItem } from ".."
import { MenuContentExample } from "./components/MenuContentExample"

export default {
  title: "Components/Menu",
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

export const DefaultStory: ComponentStory<typeof Menu> = args => (
  <Menu
    {...args}
    button={
      <Button label={"Edit menu"} icon={chevronDown} iconPosition="end" />
    }
  >
    <MenuList>
      <MenuItem
        onClick={(e: React.MouseEvent): void => {
          e.preventDefault()
          alert("onClick function to duplicate content")
        }}
        icon={duplicateIcon}
        label="Duplicate item"
      />
      <MenuItem
        onClick={(e: React.MouseEvent): void => {
          e.preventDefault()
          alert("onClick function to edit content")
        }}
        icon={editIcon}
        label="Edit Item"
      />
      <MenuItem
        onClick={(e: React.MouseEvent): void => {
          e.preventDefault()
          alert("onClick function to delete content")
        }}
        icon={trashIcon}
        destructive
        label="Delete item"
      />
      <MenuItem
        href="https://cultureamp.design/components/menu/"
        label="Learn more about Menu"
      />
      <MenuList heading="Deprecated props">
        <MenuItem
          action={(e): void => {
            e.preventDefault()
            alert("action prop has has been deprecated - use onClick")
          }}
          disabled
          label="action prop (deprecated)"
        />
      </MenuList>
    </MenuList>
  </Menu>
)
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
  (StoryComponent: Story): JSX.Element => (
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
  (StoryComponent: Story): JSX.Element => (
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
