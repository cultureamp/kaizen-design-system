import React from "react"
import { StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import * as ICONS from "~components/Icons"

console.log({ ICONS: Object.keys(ICONS) })

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Icons",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
}

const StickerSheetTemplate: StoryFn = () => {
  return (
    <>
      <StickerSheet
        heading="Icons"
        style={{ paddingBottom: IS_CHROMATIC ? "26rem" : undefined }}
      >
        <StickerSheet.Header headings={["Icon", "Name"]} />
        <StickerSheet.Body>
          {Object.keys(ICONS as { [key: string]: any }).map(iconKey => (
            <StickerSheet.Row>
              {ICONS[iconKey as keyof typeof ICONS]({})}
              <p className="font-family-heading">{iconKey}</p>
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
