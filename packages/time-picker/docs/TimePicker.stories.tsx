import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CalendarDateTime } from "@internationalized/date"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { TimePicker } from "../index"

export default {
  title: `${CATEGORIES.components}/TimePicker`,
  component: TimePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { TimePicker } from "@kaizen/time-picker"',
      },
    },
    ...figmaEmbed(
      "REPLACE_THIS_WITH_FIGMA_URL"
    ) /** @todo: Replace with Figma frame url */,
  },
  decorators: [withDesign],
} as ComponentMeta<typeof TimePicker>

export const DefaultStory: ComponentStory<typeof TimePicker> = args => {
  const [value, setValue] = useState<Date | undefined>()
  return (
    <div>
      <TimePicker {...args} value={value} onChange={setValue} />
    </div>
  )
}
DefaultStory.storyName = "TimePicker"
DefaultStory.args = {
  isDisabled: false,
  status: "default",
  id: "time-picker-input",
  label: "Launch time",
  dropdownIncrements: 15,
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["COLUMN 1", "COLUMN 2"]} />
    <StoryWrapper.Row rowTitle="ROW 1">
      {/* <TimePicker locale="en-GB" id='row-1-id' /> * @todo: Add column 1 + row 1 props */}
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="ROW 2">
      {/* <TimePicker locale="en-GB" /> * @todo: Add column 1 + row 2 props */}
      {/* <TimePicker locale="en-GB" /> * @todo: Add column 2 + row 2 props */}
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
