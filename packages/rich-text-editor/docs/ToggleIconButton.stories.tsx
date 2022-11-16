import React, { Children } from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import boldIcon from "@kaizen/component-library/icons/bold.icon.svg"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { ToggleIconButton, ToggleIconButtonProps } from "../"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.richTextEditor}/${SUB_COMPONENTS_FOLDER_NAME}/Toggle Icon Button`,
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

DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = { isActive: false, label: "Bold", icon: boldIcon }

// This is used to showcase the toggle icon button within a sticker sheet
// Implementation wise it is not required in a ToolbarSection
const InlineWrapper: React.VFC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => <div style={{ display: "inline-block" }}>{children}</div>

const StickerSheetTemplate: Story = () => (
  <>
    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Base", "Active", "Disabled"]} />
      <StoryWrapper.Row rowTitle="Default">
        <InlineWrapper>
          <ToggleIconButton isActive={false} {...defaultButton} />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton isActive={true} {...defaultButton} />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton disabled isActive={true} {...defaultButton} />
        </InlineWrapper>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Primary">
        <InlineWrapper>
          <ToggleIconButton
            mood="primary"
            isActive={false}
            {...defaultButton}
          />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton mood="primary" isActive={true} {...defaultButton} />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton
            disabled
            mood="primary"
            isActive={true}
            {...defaultButton}
          />
        </InlineWrapper>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Secondary">
        <InlineWrapper>
          <ToggleIconButton
            mood="secondary"
            isActive={false}
            {...defaultButton}
          />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton
            mood="secondary"
            isActive={true}
            {...defaultButton}
          />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton
            disabled
            mood="secondary"
            isActive={true}
            {...defaultButton}
          />
        </InlineWrapper>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Destructive">
        <InlineWrapper>
          <ToggleIconButton
            mood="destructive"
            isActive={false}
            {...defaultButton}
          />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton
            mood="destructive"
            isActive={true}
            {...defaultButton}
          />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton
            disabled
            mood="destructive"
            isActive={true}
            {...defaultButton}
          />
        </InlineWrapper>
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Secondary destructive">
        <InlineWrapper>
          <ToggleIconButton
            mood="secondary-destructive"
            isActive={false}
            {...defaultButton}
          />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton
            mood="secondary-destructive"
            isActive={true}
            {...defaultButton}
          />
        </InlineWrapper>
        <InlineWrapper>
          <ToggleIconButton
            disabled
            mood="secondary-destructive"
            isActive={true}
            {...defaultButton}
          />
        </InlineWrapper>
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
