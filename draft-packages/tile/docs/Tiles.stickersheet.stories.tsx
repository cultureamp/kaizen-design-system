import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

import { InformationTile, MultiActionTile } from "../index"

export default {
  title: "Stickersheets/Tile",
} satisfies Meta<typeof MultiActionTile>

const information = {
  text: "Additional information can be included on the underside of the tile and viewed on click of the information",
  primaryAction: {
    label: "Primary",
    href: "#",
  },
  secondaryAction: {
    label: "Bookmark",
    href: "#",
  },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header
      headings={["", "InformationTile", "MultiActionTile"]}
      headingsWidth="12rem"
    />
    <StickerSheet.Body>
      <StickerSheet.Row rowTitle="Default">
        <InformationTile
          title="Default"
          footer="Footer"
          information={information}
        />
        <MultiActionTile
          title="Default"
          primaryAction={{ label: "View", href: "#" }}
          secondaryAction={{ label: "Second", href: "#" }}
          information={information}
        />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Positive">
        <InformationTile title="Default" footer="Footer" mood="positive" />
        <MultiActionTile
          title="Default"
          primaryAction={{ label: "View", href: "#" }}
          secondaryAction={{ label: "Second", href: "#" }}
          mood="positive"
          information={information}
        />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Cautionary">
        <InformationTile
          title="Default"
          footer="Footer"
          mood="cautionary"
          information={information}
        />
        <MultiActionTile
          title="Default"
          primaryAction={{ label: "View", href: "#" }}
          secondaryAction={{ label: "Second", href: "#" }}
          mood="cautionary"
          information={information}
        />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Assertive">
        <InformationTile
          title="Default"
          footer="Footer"
          mood="assertive"
          information={information}
        />
        <MultiActionTile
          title="Default"
          primaryAction={{ label: "View", href: "#" }}
          secondaryAction={{ label: "Second", href: "#" }}
          mood="assertive"
          information={information}
        />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Negative">
        <InformationTile
          title="Default"
          footer="Footer"
          mood="negative"
          information={information}
        />
        <MultiActionTile
          title="Default"
          primaryAction={{ label: "View", href: "#" }}
          secondaryAction={{ label: "Second", href: "#" }}
          mood="negative"
          information={information}
        />
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Prominent">
        <InformationTile
          title="Default"
          footer="Footer"
          mood="prominent"
          information={information}
        />
        <MultiActionTile
          title="Default"
          primaryAction={{ label: "View", href: "#" }}
          secondaryAction={{ label: "Second", href: "#" }}
          mood="prominent"
          information={information}
        />
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
