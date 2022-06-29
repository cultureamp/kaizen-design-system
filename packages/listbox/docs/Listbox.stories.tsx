import React from "react"
import { ComponentMeta, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { Listbox } from "../index"

export default {
  title: `${CATEGORIES.components}/Listbox`,
  component: Listbox,
  parameters: {
    docs: {
      description: {
        component: 'import { Listbox } from "@kaizen/listbox".',
      },
    },
    ...figmaEmbed(
      "REPLACE_THIS_WITH_FIGMA_URL"
    ) /** @todo: Replace with Figma frame url */,
  },
  decorators: [withDesign],
} as ComponentMeta<typeof Listbox>

export const DefaultKaizenSiteDemo = args => <Listbox {...args} />
DefaultKaizenSiteDemo.storyName = "Default (Kaizen Site Demo)"

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["COLUMN 1", "COLUMN 2"]} />
    <StoryWrapper.Row rowTitle="ROW 1">
      <Listbox>
        <Listbox.Option>First</Listbox.Option>
        <Listbox.Option>Second</Listbox.Option>
        <Listbox.Option>Third</Listbox.Option>
      </Listbox>
    </StoryWrapper.Row>
    <StoryWrapper.Row rowTitle="ROW 2">
      <Listbox>
        <Listbox.Option>First</Listbox.Option>
        <Listbox.Option>Second</Listbox.Option>
        <Listbox.Option>Third</Listbox.Option>
      </Listbox>
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
