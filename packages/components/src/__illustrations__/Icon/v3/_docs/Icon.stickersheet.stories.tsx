import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { handledRtlIcons, Icon, IconProps } from "../index"

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

    const mirrorInRTL = [
      "arrow_forward",
      "arrow_back",
      ...Object.keys(handledRtlIcons),
    ] satisfies Array<IconProps["name"]>

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

        <StickerSheet heading="shouldMirrorInRTL" isReversed={isReversed}>
          <StickerSheet.Header
            headings={[
              'true; dir=["ltr"]',
              'true; dir=["rtl"]',
              'false; dir=["rtl"]',
            ]}
            hasVerticalHeadings
          />
          <StickerSheet.Body>
            {mirrorInRTL.map(name => (
              <StickerSheet.Row key={name} rowTitle={name}>
                <div dir="ltr" className="text-center">
                  <Icon {...defaultProps} name={name} shouldMirrorInRTL />
                </div>
                <div dir="rtl" className="text-center">
                  <Icon {...defaultProps} name={name} shouldMirrorInRTL />
                </div>
                <div dir="rtl" className="text-center">
                  <Icon {...defaultProps} name={name} />
                </div>
              </StickerSheet.Row>
            ))}
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
