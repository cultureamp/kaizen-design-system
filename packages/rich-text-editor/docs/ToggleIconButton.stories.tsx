import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { ToggleIconButton, ToggleIconButtonProps } from "../"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.richTextEditor}/Toggle Icon Button`,
  component: ToggleIconButton,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component:
          'import { ToggleIconButton } from "@kaizen/rich-text-editor"',
      },
    },
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=12317%3A92573"
    ),
  },
  decorators: [withDesign],
}

export const DefaultStory = (args: ToggleIconButtonProps) => (
  <ToggleIconButton {...args} />
)
const defaultButton = {
  label: "Bold",
  icon: boldIcon,
}

DefaultStory.args = { isActive: false, label: "Bold", icon: boldIcon }

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={[
            "Default",
            "Secondary",
            "Primary",
            "Destructive",
            "Secondary Destructive",
          ]}
        />
        <StoryWrapper.Row rowTitle="base">
          <ToggleIconButton isActive={false} {...defaultButton} />
          <ToggleIconButton
            mood="secondary"
            isActive={false}
            {...defaultButton}
          />
          <ToggleIconButton
            mood="primary"
            isActive={false}
            {...defaultButton}
          />
          <ToggleIconButton
            mood="destructive"
            isActive={false}
            {...defaultButton}
          />
          <ToggleIconButton
            mood="secondary-destructive"
            isActive={false}
            {...defaultButton}
          />
        </StoryWrapper.Row>
        <StoryWrapper.Row rowTitle="Selected">
          <ToggleIconButton isActive={true} {...defaultButton} />
          <ToggleIconButton
            mood="secondary"
            isActive={true}
            {...defaultButton}
          />
          <ToggleIconButton
            mood="primary"
            isActive={true}
            {...defaultButton}
          />
          <ToggleIconButton
            mood="destructive"
            isActive={true}
            {...defaultButton}
          />
          <ToggleIconButton
            mood="secondary-destructive"
            isActive={true}
            {...defaultButton}
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

DefaultStory.storyName = "Default (Kaizen Demo)"

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"

StickerSheetDefault.parameters = { chromatic: { disable: false } }
