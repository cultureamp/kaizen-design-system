import React from "react"
import { ComponentMeta, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { Select } from "@kaizen/draft-select"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { SelectOption } from "../index"

export default {
  title: `${CATEGORIES.components}/Select Option`,
  component: SelectOption,
  parameters: {
    docs: {
      description: {
        component: 'import { SelectOption } from "@kaizen/select-option".',
      },
    },
    ...figmaEmbed(
      "REPLACE_THIS_WITH_FIGMA_URL"
    ) /** @todo: Replace with Figma frame url */,
  },
  decorators: [withDesign],
} as ComponentMeta<typeof SelectOption>

export const DefaultKaizenSiteDemo = args => (
  <SelectOption
    trigger={
      <SelectOption.Trigger>
        {context => (
          <button onClick={() => context.setOpen(c => !c)}>click me</button>
        )}
      </SelectOption.Trigger>
    }
  >
    <SelectOption.ListBox>
      <SelectOption.Option>First</SelectOption.Option>
      <SelectOption.Option>Second</SelectOption.Option>
      <SelectOption.Option>Third</SelectOption.Option>
    </SelectOption.ListBox>
  </SelectOption>
)
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["COLUMN 1", "COLUMN 2"]} />
    <StoryWrapper.Row rowTitle="ROW 1">
      <div>hrehrhe</div>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="ROW 2">
      <div>hrehrhe</div>
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  chromatic: { disable: false },
  backgrounds: { default: "Purple 700" },
  controls: { disable: true },
}

/** @todo: Add extra stories to showcase props which don't appear in sticker sheets */
