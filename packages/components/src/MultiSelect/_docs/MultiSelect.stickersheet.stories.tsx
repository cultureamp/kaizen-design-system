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
    const [isOpenClosed, setIsOpenClosed] = useState<boolean>(false)
    const [selectedValuesClosed, setSelectedValuesClosed] = useState<
      MultiSelectProps["selectedValues"]
    >(new Set())

    const [isOpenOpen, setIsOpenOpen] = useState<boolean>(true)
    const [selectedValuesOpen, setSelectedValuesOpen] = useState<
      MultiSelectProps["selectedValues"]
    >(new Set())

    const [isOpenNoItems, setIsOpenNoItems] = useState<boolean>(true)
    const [selectedValuesNoItems, setSelectedValuesNoItems] = useState<
      MultiSelectProps["selectedValues"]
    >(new Set())

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
              id="id--multi-select-options--closed"
              label="Label"
              isOpen={isOpenClosed}
              onOpenChange={setIsOpenClosed}
              onSelectedValuesChange={setSelectedValuesClosed}
              selectedValues={selectedValuesClosed}
              items={options}
            />
            <MultiSelect
              id="id--multi-select-options--open"
              label="Label"
              isOpen={isOpenOpen}
              onOpenChange={setIsOpenOpen}
              onSelectedValuesChange={setSelectedValuesOpen}
              selectedValues={selectedValuesOpen}
              items={options}
            />
            <MultiSelect
              id="id--multi-select-options--no-items"
              label="Label"
              isOpen={isOpenNoItems}
              onOpenChange={setIsOpenNoItems}
              selectedValues={selectedValuesNoItems}
              onSelectedValuesChange={setSelectedValuesNoItems}
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
