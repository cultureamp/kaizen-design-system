import React from "react"
import { Story } from "@storybook/react"
import { MenuItem } from "@kaizen/draft-menu"
import { SplitButton } from "@kaizen/draft-split-button"
import { withDesign } from "storybook-addon-designs"
import duplicateIcon from "@kaizen/component-library/icons/duplicate.icon.svg"
import editIcon from "@kaizen/component-library/icons/edit.icon.svg"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { figmaEmbed } from "../../../storybook/helpers"
import { CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/Split Button`,
  component: SplitButton,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: 'import { SplitButton } from "@kaizen/draft-split-button"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=14512%3A404"
    ),
  },
  decorators: [withDesign],
}

export const DefaultKaizenSiteDemo = args => (
  <SplitButton
    label="Edit survey"
    dropdownContent={
      <>
        <MenuItem icon={editIcon} label="Menu Item 1" />
        <MenuItem icon={duplicateIcon} label="Menu Item 2" />
      </>
    }
    dropdownAltText="Open menu"
    {...args}
  />
)
DefaultKaizenSiteDemo.storyName = "Split Button"
DefaultKaizenSiteDemo.parameters = { chromatic: { disable: false } }

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Base", "Disabled"]} />
    <StoryWrapper.Row rowTitle="Default">
      <SplitButton
        label="Edit survey"
        dropdownContent={
          <>
            <MenuItem icon={editIcon} label="Menu Item 1" />
            <MenuItem icon={duplicateIcon} label="Menu Item 2" />
          </>
        }
        dropdownAltText="Open menu"
      />
      <SplitButton
        label="Edit survey"
        disabled
        dropdownContent={
          <>
            <MenuItem icon={editIcon} label="Menu Item 1" />
            <MenuItem icon={duplicateIcon} label="Menu Item 2" />
          </>
        }
        dropdownAltText="Open menu"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Primary">
      <SplitButton
        label="Edit survey"
        variant="primary"
        dropdownContent={
          <>
            <MenuItem icon={editIcon} label="Menu Item 1" />
            <MenuItem icon={duplicateIcon} label="Menu Item 2" />
          </>
        }
        dropdownAltText="Open menu"
      />
      <SplitButton
        label="Edit survey"
        variant="primary"
        disabled
        dropdownContent={
          <>
            <MenuItem icon={editIcon} label="Menu Item 1" />
            <MenuItem icon={duplicateIcon} label="Menu Item 2" />
          </>
        }
        dropdownAltText="Open menu"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="Anchor Link">
      <SplitButton
        label="Edit survey"
        href="//example.com"
        dropdownContent={
          <>
            <MenuItem icon={editIcon} label="Menu Item 1" />
            <MenuItem icon={duplicateIcon} label="Menu Item 2" />
          </>
        }
        dropdownAltText="Open menu"
      />
      <SplitButton
        label="Edit survey"
        href="//example.com"
        disabled
        dropdownContent={
          <>
            <MenuItem icon={editIcon} label="Menu Item 1" />
            <MenuItem icon={duplicateIcon} label="Menu Item 2" />
          </>
        }
        dropdownAltText="Open menu"
      />
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="With Disabled Option">
      <SplitButton
        label="Edit survey"
        dropdownContent={
          <>
            <MenuItem icon={editIcon} disabled label="Menu Item 1" />
            <MenuItem icon={duplicateIcon} label="Menu Item 2" />
          </>
        }
        dropdownAltText="Open menu"
      />
      <SplitButton
        label="Edit survey"
        disabled
        dropdownContent={
          <>
            <MenuItem icon={editIcon} label="Menu Item 1" />
            <MenuItem icon={duplicateIcon} label="Menu Item 2" />
          </>
        }
        dropdownAltText="Open menu"
      />
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
