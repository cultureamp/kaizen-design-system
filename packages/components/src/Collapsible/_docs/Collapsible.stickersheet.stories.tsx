import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "@kaizen/typography"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Collapsible, CollapsibleProps } from "../index"

export default {
  title: "KAIO-staging/Collapsible",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const CollapsibleWrapped = (
  args: Omit<CollapsibleProps, "children">
): JSX.Element => (
  <Collapsible open {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
    scelerisque sem, vel ultricies justo. Donec eu porttitor ante, nec gravida
    orci. Nulla facilisi. Cras varius erat id fermentum mattis. Mauris bibendum
    vestibulum erat, quis blandit metus viverra sit amet. Vivamus pretium vitae
    turpis ut condimentum. Sed vulputate magna nisl, in cursus urna hendrerit
    et. Aenean semper, est non feugiat sodales, nisl ligula aliquet lorem, sit
    amet scelerisque arcu quam a sapien. Donec in viverra urna.
  </Collapsible>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Default">
          <CollapsibleWrapped title="Collapsible" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="noSectionPadding">
          <CollapsibleWrapped title="No Padding" noSectionPadding />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="lazyLoad">
          <CollapsibleWrapped title="Lazy load" lazyLoad />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="clear">
          <CollapsibleWrapped title="Clear" variant="clear" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="custom heading">
          <CollapsibleWrapped
            title="Custom header"
            renderHeader={title => (
              <Heading variant="heading-4" tag="span">
                {title}
              </Heading>
            )}
          />
        </StickerSheet.Row>
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
  parameters: { textDirection: "rtl" },
}
