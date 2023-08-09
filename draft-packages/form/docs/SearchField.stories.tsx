import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
import { SearchField, SearchFieldProps } from "@kaizen/draft-form"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

export default {
  tags: ["autodocs"],
  title: "Components/Search Field",
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: 'import { SearchField } from "@kaizen/draft-form"',
      },
    },
  },
} satisfies Meta<typeof SearchField>

export const DefaultKaizenDemo: StoryFn<typeof SearchField> = args => {
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
  placeholder: "Search…",
  labelText: "Label",
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const variants: Array<{
    heading: string
    variantProps?: Partial<SearchFieldProps>
  }> = [
    {
      heading: "Default",
    },
    {
      heading: "Secondary",
      variantProps: { secondary: true },
    },
  ]

  const COMMON_PROPS = {
    placeholder: "Search…",
    reversed: isReversed,
    labelText: "Label",
    value: "Some value",
  }

  return (
    <>
      {variants.map(({ heading, variantProps }) => (
        <React.Fragment key={heading}>
          <StickerSheet isReversed={isReversed} heading={heading}>
            <StickerSheet.Header headings={["Base", "Filled", "Loading"]} />
            <StickerSheet.Body>
              <StickerSheet.Row>
                <SearchField {...variantProps} {...COMMON_PROPS} value="" />
                <SearchField {...variantProps} {...COMMON_PROPS} />
                <SearchField {...variantProps} {...COMMON_PROPS} loading />
              </StickerSheet.Row>
            </StickerSheet.Body>
          </StickerSheet>

          <StickerSheet isReversed={isReversed}>
            <StickerSheet.Header headings={["Disabled", "Hover", "Focus"]} />
            <StickerSheet.Body>
              <StickerSheet.Row>
                <SearchField
                  {...variantProps}
                  {...COMMON_PROPS}
                  value=""
                  disabled
                />
                <SearchField
                  {...variantProps}
                  {...COMMON_PROPS}
                  classNameOverride="story__input-search-hover"
                />
                <SearchField
                  {...variantProps}
                  {...COMMON_PROPS}
                  classNameOverride="story__input-search-focus"
                />
              </StickerSheet.Row>
            </StickerSheet.Body>
          </StickerSheet>
        </React.Fragment>
      ))}
    </>
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
