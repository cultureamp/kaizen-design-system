import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Brand } from "../index"

export default {
  title: "KAIO-staging/Brand",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Logo Horizontal">
          <Brand
            alt="Culture Amp"
            variant="logo-horizontal"
            reversed={isReversed}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Logo Vertical">
          <Brand
            alt="Culture Amp"
            variant="logo-vertical"
            reversed={isReversed}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Enso">
          <Brand alt="Culture Amp" variant="enso" reversed={isReversed} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Collective Intelligence">
          <div style={{ width: "200px" }}>
            <Brand
              alt="Collective Intelligence"
              variant="collective-intelligence"
              reversed={isReversed}
            />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Reversed)",
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
