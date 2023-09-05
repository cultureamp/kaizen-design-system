import React, { useState } from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Popover, useFloating } from "../index"

export default {
  title: "Components/Popover",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const PopoverTemplate = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const { refs } = useFloating()

  return (
    <div>
      <button
        ref={refs.setReference}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Pancakes!
      </button>
      {isOpen && (
        <Popover refs={refs}>
          <div className="p-16">Content here!</div>
        </Popover>
      )}
    </div>
  )
}

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet>
        <StickerSheet.Header
          headings={["COLUMN 1", "COLUMN 2"]}
          headingsWidth="20rem"
        />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <PopoverTemplate />
            <PopoverTemplate />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
      <div className="flex w-[100%] mt-[150px] mb-[150px] gap-[30rem]">
        <PopoverTemplate />
        <PopoverTemplate />
      </div>
      <div className="flex justify-between w-[100%]">
        <PopoverTemplate />
        <PopoverTemplate />
      </div>
    </>
  ),
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
