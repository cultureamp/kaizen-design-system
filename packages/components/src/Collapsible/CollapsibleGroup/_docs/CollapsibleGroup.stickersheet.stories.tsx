import React from "react"
import { Meta } from "@storybook/react"
import {
  Collapsible,
  CollapsibleProps,
} from "~components/Collapsible/Collapsible"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { CollapsibleGroup, CollapsibleGroupProps } from "../index"

export default {
  title: "KAIO-staging/Collapsibles/CollapsibleGroup",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const CollapsibleWrapped = (
  args: Omit<CollapsibleProps, "children" | "title">
): JSX.Element => (
  <Collapsible title="Title" open {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
    scelerisque sem, vel ultricies justo. Donec eu porttitor ante, nec gravida
    orci. Nulla facilisi. Cras varius erat id fermentum mattis. Mauris bibendum
    vestibulum erat, quis blandit metus viverra sit amet. Vivamus pretium vitae
    turpis ut condimentum. Sed vulputate magna nisl, in cursus urna hendrerit
    et. Aenean semper, est non feugiat sodales, nisl ligula aliquet lorem, sit
    amet scelerisque arcu quam a sapien. Donec in viverra urna.
  </Collapsible>
)

const CollapsibleGroupWrapped = (
  args: Omit<CollapsibleGroupProps, "children">
): JSX.Element => (
  <CollapsibleGroup {...args}>
    <CollapsibleWrapped key="collapsible-1" />
    <CollapsibleWrapped key="collapsible-2" />
    <CollapsibleWrapped key="collapsible-3" />
  </CollapsibleGroup>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="default">
          <CollapsibleGroupWrapped />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="noSectionPadding">
          <CollapsibleGroupWrapped noSectionPadding />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="lazyLoad">
          <CollapsibleGroupWrapped lazyLoad />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="separated">
          <CollapsibleGroupWrapped separated />
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
