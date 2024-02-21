import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { MultiSelectToggle, MultiSelectToggleProps } from "../index"

export default {
  title: "Components/MultiSelect/MultiSelectToggle",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no controlled element on purpose, to be used within `MultiSelect` where popover is present
            id: "aria-valid-attr-value",
            enabled: false,
          },
          {
            // Built with no label for the button on purpose, to be used within `MultiSelect` where label is present
            id: "button-name",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      selectedOptions: [],
      "aria-labelledby": "id--label",
      "aria-controls": "id--popover",
      onClick: () => undefined,
      onRemoveOption: () => undefined,
      onRemoveAllOptions: () => undefined,
    } satisfies MultiSelectToggleProps

    return (
      <>
        <StickerSheet
          isReversed={isReversed}
          heading="MultiSelectToggle"
          className="kz-w-full"
        >
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="Default" rowTitleWidth="10rem">
              <MultiSelectToggle {...defaultProps} />
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Open">
              <MultiSelectToggle {...defaultProps} isOpen />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          heading="Pseudo states"
          className="w-full"
        >
          <StickerSheet.Header
            headings={["Hover", "Focus"]}
            hasVerticalHeadings
            verticalHeadingsWidth="10rem"
          />
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="Toggle">
              <MultiSelectToggle
                {...defaultProps}
                data-sb-pseudo-styles="hover"
              />
              <MultiSelectToggle
                {...defaultProps}
                data-sb-pseudo-styles="focus"
              />
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Toggle Button">
              <MultiSelectToggle
                {...defaultProps}
                data-sb-pseudo-styles="hover--button"
              />
              <MultiSelectToggle
                {...defaultProps}
                data-sb-pseudo-styles="focus--button"
              />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          heading="Validation states"
          className="w-full"
        >
          <StickerSheet.Header
            headings={["Error", "Caution"]}
            verticalHeadingsWidth="10rem"
          />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <MultiSelectToggle status="error" {...defaultProps} />
              <MultiSelectToggle status="caution" {...defaultProps} />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          heading="Has selected values"
          className="w-full"
        >
          <StickerSheet.Header
            headings={["Default", "Hover", "Multi-line"]}
            headingsWidth="30%"
          />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <StickerSheet.Cell className="kz-align-top">
                <MultiSelectToggle
                  {...defaultProps}
                  selectedOptions={[
                    { value: "pancakes", label: "Pancakes" },
                    { value: "waffles", label: "Waffles" },
                  ]}
                />
              </StickerSheet.Cell>
              <StickerSheet.Cell className="kz-align-top">
                <MultiSelectToggle
                  {...defaultProps}
                  selectedOptions={[
                    { value: "pancakes", label: "Pancakes" },
                    { value: "waffles", label: "Waffles" },
                  ]}
                  data-sb-pseudo-styles="hover"
                />
              </StickerSheet.Cell>
              <StickerSheet.Cell className="kz-align-top">
                <MultiSelectToggle
                  {...defaultProps}
                  selectedOptions={[
                    { value: "pancakes", label: "Pancakes" },
                    { value: "toastie", label: "Toastie" },
                    { value: "jaffle", label: "Jaffle" },
                    { value: "pikelets", label: "Pikelets" },
                    { value: "crumpets", label: "Crumpets" },
                    { value: "waffles", label: "Waffles" },
                  ]}
                />
              </StickerSheet.Cell>
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>
      </>
    )
  },
  parameters: {
    pseudo: {
      hover: [
        '[data-sb-pseudo-styles="hover"]',
        '[data-sb-pseudo-styles="hover--button"]',
        '[data-sb-pseudo-styles="hover--button"] > button',
      ],
      focusWithin: [
        '[data-sb-pseudo-styles="focus"]',
        '[data-sb-pseudo-styles="focus--button"]',
      ],
      focus: [
        '[data-sb-pseudo-styles="focus"] > button',
        '[data-sb-pseudo-styles="focus--button"] > button',
      ],
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
