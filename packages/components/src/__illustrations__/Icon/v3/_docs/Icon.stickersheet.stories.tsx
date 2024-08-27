import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Icon, IconProps } from "../index"

export default {
  title: "Illustrations/Icon/Icon (v3)",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      name: "star",
      isPresentational: true,
    } satisfies IconProps

    const sizes = ["small", "medium", "large", "inherit"] satisfies Array<
      IconProps["size"]
    >

    return (
      <>
        <StickerSheet heading="Icon" isReversed={isReversed}>
          <StickerSheet.Header headings={["Outlined", "Filled", "Color"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <Icon {...defaultProps} />
              <Icon {...defaultProps} isFilled />
              <Icon {...defaultProps} isFilled className="text-yellow-500" />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="Sizes" isReversed={isReversed}>
          <StickerSheet.Header headings={[...sizes, "custom"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              {sizes.map(size => (
                <Icon key={size} {...defaultProps} size={size} />
              ))}
              <Icon {...defaultProps} className="text-heading-1" />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="shouldMirrorInRTL" isReversed={isReversed}>
          <StickerSheet.Header
            headings={['dir=["ltr"]', 'dir=["rtl"]']}
            hasVerticalHeadings
          />
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="arrow_forward">
              <div dir="ltr">
                <Icon
                  {...defaultProps}
                  name="arrow_forward"
                  shouldMirrorInRTL
                />
              </div>
              <div dir="rtl">
                <Icon
                  {...defaultProps}
                  name="arrow_forward"
                  shouldMirrorInRTL
                />
              </div>
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
