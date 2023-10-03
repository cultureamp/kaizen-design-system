import React, { useState } from "react"
import { Meta } from "@storybook/react"
import isChromatic from "chromatic"
import classnames from "classnames"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { MultiSelect, MultiSelectProps } from "../index"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Multi Select",
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
    const [selectedValues, setSelectedValues] = useState<
      MultiSelectProps["selectedValues"]
    >(new Set())
    const [isOpen2, setIsOpen2] = useState<boolean>(true)
    const [selectedValues2, setSelectedValues2] = useState<
      MultiSelectProps["selectedValues"]
    >(new Set())
    const [isOpen3, setIsOpen3] = useState<boolean>(true)

    return (
      <StickerSheet
        heading="MultiSelect"
        className={classnames("w-full", IS_CHROMATIC && "pb-160")}
      >
        <StickerSheet.Header
          headings={["Closed", "Open", "No items"]}
          headingsWidth="30%"
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <MultiSelect
              id="id--multi-select-options"
              label="Label"
              isOpen={isOpen}
              onOpenChange={setIsOpen}
              onSelectedValuesChange={setSelectedValues}
              selectedValues={selectedValues}
              items={options}
            />
            <MultiSelect
              id="id--multi-select-options-2"
              label="Label"
              isOpen={isOpen2}
              onOpenChange={setIsOpen2}
              onSelectedValuesChange={setSelectedValues2}
              selectedValues={selectedValues2}
              items={options}
            />
            <MultiSelect
              id="id--multi-select-options-3"
              label="Label"
              isOpen={isOpen3}
              onOpenChange={setIsOpen3}
              selectedValues={new Set()}
              onSelectedValuesChange={() => undefined}
              items={[]}
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
