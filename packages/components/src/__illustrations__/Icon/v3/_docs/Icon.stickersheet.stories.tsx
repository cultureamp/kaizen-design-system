import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Icon, IconProps } from "../index"

export default {
  title: "Illustrations/Icon/v3/Tests",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const sizes = ["small", "medium", "large", "inherit"] satisfies Array<
      IconProps["size"]
    >

    return (
      <>
        <StickerSheet heading="Icon" isReversed={isReversed}>
          <StickerSheet.Header
            headings={["Outlined", "Filled", "Color (className)"]}
          />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <Icon name="star" />
              <Icon name="star" isFilled />
              <Icon name="star" isFilled className="text-yellow-500" />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="Sizes" isReversed={isReversed}>
          <StickerSheet.Header headings={[...sizes, "custom"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              {sizes.map(size => (
                <Icon key={size} name="star" size={size} />
              ))}
              <Icon name="star" className="text-heading-1" />
            </StickerSheet.Row>
          </StickerSheet.Body>
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
  parameters: {
    textDirection: "rtl",
  },
}
