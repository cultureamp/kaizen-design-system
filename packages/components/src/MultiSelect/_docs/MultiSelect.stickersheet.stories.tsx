import React, { useState } from "react"
import { Meta } from "@storybook/react"
import isChromatic from "chromatic"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { MultiSelect, MultiSelectProps } from "../index"

const IS_CHROMATIC = isChromatic()

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
      <>
        <StickerSheet
          title="MultiSelect"
          className={IS_CHROMATIC ? "pb-160" : undefined}
          headers={["Closed", "Open", "No items"]}
          layout="stretch"
        >
          <StickerSheet.Row>
            <MultiSelect
              id="id--multi-select-options--closed"
              label="Label"
              description="A short description"
              isOpen={isOpenClosed}
              onOpenChange={setIsOpenClosed}
              onSelectedValuesChange={setSelectedValuesClosed}
              selectedValues={selectedValuesClosed}
              items={options}
            />
            <MultiSelect
              id="id--multi-select-options--open"
              label="Label"
              description="A short description"
              isOpen={isOpenOpen}
              onOpenChange={setIsOpenOpen}
              onSelectedValuesChange={setSelectedValuesOpen}
              selectedValues={selectedValuesOpen}
              items={options}
            />
            <MultiSelect
              id="id--multi-select-options--no-items"
              label="Label"
              description="A short description"
              isOpen={isOpenNoItems}
              onOpenChange={setIsOpenNoItems}
              selectedValues={selectedValuesNoItems}
              onSelectedValuesChange={setSelectedValuesNoItems}
              items={[]}
            />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet
          title="Validation"
          className={IS_CHROMATIC ? "pb-160" : undefined}
          headers={["Error", "Caution"]}
          layout="stretch"
        >
          <StickerSheet.Row>
            <MultiSelect
              id="id--multi-select--error"
              label="Label"
              isOpen={false}
              onOpenChange={() => undefined}
              onSelectedValuesChange={() => undefined}
              selectedValues={selectedValuesOpen}
              items={options}
              validationMessage={{
                status: "error",
                message: "There are no waffles left.",
              }}
            />
            <MultiSelect
              id="id--multi-select--caution"
              label="Label"
              isOpen={false}
              onOpenChange={() => undefined}
              onSelectedValuesChange={() => undefined}
              selectedValues={selectedValuesNoItems}
              items={options}
              validationMessage={{
                status: "caution",
                message: "There are only four pancakes left.",
              }}
            />
          </StickerSheet.Row>
        </StickerSheet>
      </>
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
