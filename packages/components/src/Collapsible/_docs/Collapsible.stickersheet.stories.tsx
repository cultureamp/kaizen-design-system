import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "@kaizen/typography"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { Collapsible, CollapsibleProps } from "../index"

export default {
  title: "Components/Collapsible",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Looks like axe is having issues with the overlapping elements in stickersheets causing false positives.
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const CollapsibleWrapped = ({
  title = "Collapsible",
  ...args
}: Omit<CollapsibleProps, "children" | "title"> & {
  title?: string
}): JSX.Element => (
  <Collapsible open title={title} {...args}>
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
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Default">
          <CollapsibleWrapped />
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
