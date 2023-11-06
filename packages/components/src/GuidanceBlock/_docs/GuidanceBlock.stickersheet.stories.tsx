import React from "react"
import { Meta } from "@storybook/react"
import { Heading } from "~components/Heading"
import { EmptyStatesPositive, Informative } from "~components/Illustration"
import { Tag } from "~components/Tag"
import { Text } from "~components/Text"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { GuidanceBlock, GuidanceBlockProps } from "../index"
import { variantsMap } from "../types"

export default {
  title: "Components/GuidanceBlock",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const GENERIC_PROPS = {
  persistent: true,
  illustration: <Informative alt="" />,
  actions: {
    primary: {
      label: "Action",
      onClick: () => {
        alert("tada: 🎉")
      },
    },
  },
}

const TEXT_PROPS: GuidanceBlockProps = {
  ...GENERIC_PROPS,
  text: {
    title: "This is the Guidance block title",
    description:
      "Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, " +
      "qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.",
  },
}

const CONTENT_PROPS: GuidanceBlockProps = {
  ...GENERIC_PROPS,
  content: (
    <>
      <Tag>Early Access</Tag>
      <Heading variant="heading-3">{TEXT_PROPS.text.title}</Heading>
      <Text variant="body">{TEXT_PROPS.text.description}</Text>
    </>
  ),
}

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed}>
      <StickerSheet.Body>
        <>
          {variantsMap.map(variant => (
            <StickerSheet.Row key={variant} rowTitle={variant}>
              <GuidanceBlock variant={variant} {...TEXT_PROPS} />
            </StickerSheet.Row>
          ))}
        </>
        <StickerSheet.Row rowTitle="No arrow">
          <GuidanceBlock withActionButtonArrow={false} {...TEXT_PROPS} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Custom Content">
          <GuidanceBlock {...CONTENT_PROPS} />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Tooltip">
          <GuidanceBlock
            {...TEXT_PROPS}
            actions={{
              primary: {
                ...GENERIC_PROPS.actions.primary,
                tooltip: {
                  text: "Opens in a new tab",
                  mood: "cautionary",
                  isInitiallyVisible: true,
                },
              },
            }}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="Scene Illustration">
          <GuidanceBlock
            {...TEXT_PROPS}
            illustration={<EmptyStatesPositive alt="" />}
            illustrationType="scene"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="No Max Width">
          <GuidanceBlock {...TEXT_PROPS} noMaxWidth />
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
  parameters: {
    backgrounds: { default: "Purple 700" },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: {
    textDirection: "rtl",
  },
}
