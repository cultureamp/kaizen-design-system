import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { SearchField, SearchFieldProps } from "../index"

export default {
  title: "KAIO-staging/SearchField",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
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
  },
  parameters: {
    pseudo: {
      hover: ".story__input-search-hover > div",
      focus: ".story__input-search-focus > div > input",
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
