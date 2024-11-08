import React from "react"
import { Meta } from "@storybook/react"
import isChromatic from "chromatic"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { ProgressBar, ProgressBarProps } from "../index"

export default {
  title: "Components/ProgressBar",
  parameters: {
    chromatic: { disable: false, pauseAnimationAtEnd: true },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // `label` is an optional prop so this has no accessible by default. consumers can pass in `aria-labelledby` or `aria-label` which can provide an accessible description pending a refactor.
            id: "aria-progressbar-name",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const isNotChromatic = !isChromatic()

const moods = [
  {
    title: "Positive",
    props: { mood: "positive" },
  },
  {
    title: "Informative",
    props: { mood: "informative" },
  },
  {
    title: "Negative",
    props: { mood: "negative" },
  },
  {
    title: "Cautionary",
    props: { mood: "cautionary" },
  },
] satisfies { title: string; props: Partial<ProgressBarProps> }[]

const colors = [
  {
    title: "Blue",
    props: { color: "blue" },
  },
  {
    title: "Green",
    props: { color: "green" },
  },
  {
    title: "Red",
    props: { color: "red" },
  },
  {
    title: "Yellow",
    props: { color: "yellow" },
  },
  {
    title: "Green (Animated)",
    props: { color: "green", isAnimating: isNotChromatic },
  },
] satisfies { title: string; props: Partial<ProgressBarProps> }[]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed = false }) => {
    const defaultProps = {
      label: "25%",
      value: 25,
      max: 100,
      isAnimating: false,
      isReversed,
      subtext: "Subtext",
    }

    return (
      <>
        <StickerSheet
          className="w-full"
          heading="ProgressBar"
          isReversed={isReversed}
        >
          <StickerSheet.Body>
            {colors.map(({ title, props }) => (
              <StickerSheet.Row
                key={title}
                rowTitle={title}
                rowTitleWidth="100px"
              >
                <ProgressBar {...defaultProps} {...props} />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>
        <StickerSheet
          className="w-full"
          heading="ProgressBar Moods (deprecated)"
          isReversed={isReversed}
        >
          <StickerSheet.Body>
            {moods.map(({ title, props }) => (
              <StickerSheet.Row
                key={title}
                rowTitle={title}
                rowTitleWidth="100px"
              >
                <ProgressBar {...defaultProps} {...props} />
              </StickerSheet.Row>
            ))}
          </StickerSheet.Body>
        </StickerSheet>
      </>
    )
  },
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
