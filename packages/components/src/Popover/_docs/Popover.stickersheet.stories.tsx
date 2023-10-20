import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { PopoverProps, usePopover } from "../index"
import { PlacementKeys } from "../types"

export default {
  title: "Components/Popover",
  parameters: {
    chromatic: { disable: false, diffThreshold: 1 },
    controls: { disable: true },
  },
} satisfies Meta

const PopoverWrapper = (
  props: Omit<PopoverProps, "children" | "referenceElement">
): JSX.Element => {
  const [referenceElementRef, Popover] = usePopover()

  return (
    <div className="text-center">
      <button type="button" className="inline-block" ref={referenceElementRef}>
        Pop
      </button>
      <Popover {...props}>Hello world</Popover>
    </div>
  )
}

const cellStyle = { width: "400px", height: "250px" }

const PopoverRow = ({
  placement,
}: {
  placement?: PopoverProps["placement"]
}): JSX.Element => (
  <StickerSheet.Row rowTitle={placement}>
    <StickerSheet.Cell style={cellStyle}>
      <PopoverWrapper placement={placement} />
    </StickerSheet.Cell>
  </StickerSheet.Row>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Header
        headings={[
          "Default",
          "Positive",
          "Informative",
          "Negative",
          "Cautionary",
        ]}
        hasVerticalHeadings
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Variants">
          <StickerSheet.Cell style={cellStyle}>
            <PopoverWrapper />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <PopoverWrapper variant="positive" heading="Positive" />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <PopoverWrapper variant="informative" heading="Informative" />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <PopoverWrapper variant="negative" heading="Negative" />
          </StickerSheet.Cell>
          <StickerSheet.Cell style={cellStyle}>
            <PopoverWrapper variant="cautionary" heading="Cautionary" />
          </StickerSheet.Cell>
        </StickerSheet.Row>
        <>
          {PlacementKeys.map(placement => (
            <PopoverRow key={placement} placement={placement} />
          ))}
        </>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}
