import React, { useState } from "react"
import { Meta, StoryFn } from "@storybook/react"
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
} satisfies Meta<typeof FilterSelect>

const StickerSheetTemplate: StoryFn = () => {
  return (
    <>
      <StickerSheet
        heading="Icons"
        style={{ paddingBottom: IS_CHROMATIC ? "26rem" : undefined }}
      >
        <StickerSheet.Header headings={["Icon", "Name"]} />
        <StickerSheet.Body>
          {Object.keys(ICONS).map(iconKey => (
            <StickerSheet.Row>
              {ICONS[iconKey]()}
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
