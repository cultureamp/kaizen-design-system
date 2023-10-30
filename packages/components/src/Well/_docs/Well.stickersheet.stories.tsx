import React from "react"
import { Meta } from "@storybook/react"
import { Text } from "~components/Text"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Well, WellProps } from "../index"
import { borderStyleTypes, variantTypes } from "../types"

export default {
  title: "Components/Well",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const WellWrapped = (props: WellProps): JSX.Element => (
  <Well {...props}>
    <Text variant="body">
      Bacon ipsum dolor amet andouille buffalo beef boudin kielbasa drumstick
      fatback cow tongue ground round chicken. Jowl cow short ribs, ham tongue
      turducken spare ribs pig drumstick chuck meatball. Buffalo turducken
      pancetta tail salami chicken. Bresaola venison pastrami beef.
    </Text>
  </Well>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet>
        <StickerSheet.Header
          headings={["Solid Border", "Dashed Border", "None"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          {variantTypes.map(variant => (
            <StickerSheet.Row key={variant} rowTitle={variant}>
              {borderStyleTypes.map(border => (
                <WellWrapped
                  key={border}
                  variant={variant}
                  borderStyle={border}
                />
              ))}
            </StickerSheet.Row>
          ))}
        </StickerSheet.Body>
      </StickerSheet>
      <StickerSheet>
        <StickerSheet.Header headings={["Margin", "No Margin"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <StickerSheet.Cell>
              <WellWrapped />
              <WellWrapped />
            </StickerSheet.Cell>
            <StickerSheet.Cell>
              <WellWrapped noMargin />
              <WellWrapped />
            </StickerSheet.Cell>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}
