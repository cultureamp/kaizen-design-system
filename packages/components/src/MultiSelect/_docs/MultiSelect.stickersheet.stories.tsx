import React, { useState } from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { MultiSelect } from "../index"

export default {
  title: "Components/MultiSelect",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const options = [
  {
    label: "Pancakes",
    value: "pancakes",
  },
  {
    label: "Waffle",
    value: "waffle",
  },
  {
    label: "Toastie",
    value: "toastie",
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedValues, setSelectedValues] = useState<Set<React.Key>>(
      new Set()
    )
    const [isOpen2, setIsOpen2] = useState<boolean>(true)
    const [selectedValues2, setSelectedValues2] = useState<Set<React.Key>>(
      new Set()
    )

    return (
      <StickerSheet heading="MultiSelect" className="w-full">
        <StickerSheet.Header
          headings={["Closed", "Open"]}
          headingsWidth="50%"
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <MultiSelect
              id="id--multi-select-options"
              label="Jalapeno"
              isOpen={isOpen}
              onOpenChange={setIsOpen}
              onSelectedValuesChange={setSelectedValues}
              selectedValues={selectedValues}
              items={options}
            />
            <MultiSelect
              id="id--multi-select-options-2"
              label="Jalapeno open"
              isOpen={isOpen2}
              onOpenChange={setIsOpen2}
              onSelectedValuesChange={setSelectedValues2}
              selectedValues={selectedValues2}
              items={options}
            />
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
