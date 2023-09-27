import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { FilterButton } from "../FilterButton"
import { FilterButtonRemovable } from "../FilterButtonRemovable"
import { FilterButtonBase } from "../subcomponents/FilterButtonBase"

export default {
  title: "Components/Filter Base/Filter Buttons",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet heading="Filter Button Base">
        <StickerSheet.Header
          headings={["Default", "Hover", "Active", "Focus"]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <FilterButtonBase>Label</FilterButtonBase>
            <FilterButtonBase
              data-pseudo-styles="hover"
              data-sb-a11y-color-contrast-disable
            >
              Label
            </FilterButtonBase>
            <FilterButtonBase
              data-pseudo-styles="active"
              data-sb-a11y-color-contrast-disable
            >
              Label
            </FilterButtonBase>
            <FilterButtonBase
              data-pseudo-styles="focus"
              data-sb-a11y-color-contrast-disable
            >
              Label
            </FilterButtonBase>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Filter Button">
        <StickerSheet.Header
          headings={["Closed", "Open", "Has selected value"]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <FilterButton label="Desserts" />
            <FilterButton label="Desserts" isOpen />
            <FilterButton label="Desserts" selectedValue="Cake" />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Filter Button Removable">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitleWidth={70}>
            <FilterButtonRemovable
              triggerButtonProps={{
                label: "Desserts",
              }}
              removeButtonProps={{
                onClick: () => undefined,
              }}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-pseudo-styles="hover"]',
      active: '[data-pseudo-styles="active"]',
      focus: '[data-pseudo-styles="focus"]',
      focusVisible: '[data-pseudo-styles="focus"]',
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
  parameters: {
    ...StickerSheetTemplate["parameters"],
    textDirection: "rtl",
  },
}
