import React from "react"
import { StoryFn } from "@storybook/react"
import isChromatic from "chromatic"
import * as ICONS from "~components/Icon"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Icons",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
}

const StickerSheetTemplate: StoryFn = () => (
  <>
    <StickerSheet
      heading="Icons"
      style={{ paddingBottom: IS_CHROMATIC ? "26rem" : undefined }}
    >
      <StickerSheet.Header headings={["Icon", "Name"]} />
      <StickerSheet.Body>
        {Object.keys(ICONS as { [key: string]: any }).map(iconKey => (
          <StickerSheet.Row key={iconKey}>
            {ICONS[iconKey as keyof typeof ICONS]({ role: "presentation" })}
            <p className="font-family-heading">{iconKey}</p>
          </StickerSheet.Row>
        ))}
      </StickerSheet.Body>
    </StickerSheet>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
