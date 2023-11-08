import React from "react"
import { Meta } from "@storybook/react"
import isChromatic from "chromatic"
import { FilterButton } from "~components/FilterButton"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Filter, FilterContents } from "../index"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Base",
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // FIXME: dialog element should have an accessible name
            id: "aria-dialog-name",
            enabled: false,
          },
        ],
      },
    },
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true)

    return (
      <StickerSheet
        heading="Filter"
        style={{ paddingBottom: IS_CHROMATIC ? "6rem" : undefined }}
      >
        <StickerSheet.Header headings={["Open"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <Filter
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              renderTrigger={(triggerProps): JSX.Element => (
                <FilterButton label="Label" {...triggerProps} />
              )}
            >
              <FilterContents>Filter Contents</FilterContents>
            </Filter>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    )
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
