import React, { useState } from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { SearchField } from "@kaizen/draft-form"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.form}/Search Field`,
  component: SearchField,
  parameters: {
    chromatic: { disable: false },
    docs: {
      description: {
        component: 'import { SearchField } from "@kaizen/draft-form"',
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof SearchField>

export const DefaultKaizenDemo: ComponentStory<typeof SearchField> = args => {
  const [value, setValue] = useState("Some value")

  return (
    <SearchField
      value={value}
      onChange={(e): void => setValue(e.target.value)}
      onClear={(): void => setValue("")}
      {...args}
    />
  )
}
DefaultKaizenDemo.storyName = "Default (Kaizen Demo)"
DefaultKaizenDemo.args = {
  id: "search-field",
  placeholder: "Search…",
  labelText: "Label",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const COMMON_PROPS = {
    placeholder: "Search…",
    reversed: isReversed,
    labelText: "Label",
    value: "Some value",
  }
  return (
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={["Base", "Filled", "Loading", "Disabled"]}
      />
      <StoryWrapper.Row rowTitle="Default">
        <SearchField {...COMMON_PROPS} value={""} id="search-field-1" />
        <SearchField id="search-field-2" {...COMMON_PROPS} />
        <SearchField id="search-field-3" {...COMMON_PROPS} loading />
        <SearchField id="search-field-4" {...COMMON_PROPS} disabled />
      </StoryWrapper.Row>
      <StoryWrapper.Row rowTitle="Secondary">
        <SearchField
          id="search-field-5"
          {...COMMON_PROPS}
          value={""}
          secondary
        />
        <SearchField id="search-field-6" {...COMMON_PROPS} secondary />
        <SearchField id="search-field-7" {...COMMON_PROPS} secondary loading />
        <SearchField id="search-field-8" {...COMMON_PROPS} secondary disabled />
      </StoryWrapper.Row>
    </StoryWrapper>
  )
}

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
