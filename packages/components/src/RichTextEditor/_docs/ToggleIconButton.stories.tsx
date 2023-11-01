import React from "react"
import { StoryFn } from "@storybook/react"
// import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { BoldIcon } from "~components/Icon"
import { ToggleIconButton } from ".."

export default {
  tags: ["autodocs"],
  title: "Components/Rich Text Editor/Subcomponents/Toggle Icon Button",
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
  },
}

// const defaultButton = {
//   label: "Bold",
//   icon: boldIcon,
// }
export const DefaultStory: StoryFn<typeof ToggleIconButton> = args => (
  <ToggleIconButton {...args} />
)
DefaultStory.storyName = "Default (Kaizen Demo)"
DefaultStory.args = { isActive: false, label: "Bold", icon: <BoldIcon role="presentation" /> }

// This is used to showcase the toggle icon button within a sticker sheet
// Implementation wise it is not required in a ToolbarSection
// const InlineWrapper = ({
//   children,
// }: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
//   <div style={{ display: "inline-block" }}>{children}</div>
// )

const StickerSheetTemplate: StoryFn = () => (
  <>
    {/* <StoryWrapper>
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
    </StoryWrapper> */}
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }
