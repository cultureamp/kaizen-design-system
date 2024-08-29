import React from "react"
import { Meta } from "@storybook/react"
import { userEvent, within, expect, waitFor } from "@storybook/test"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { VideoPlayer } from "./index"

export default {
  title: "Components/Illustrations/Tests",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} title="Aspect Ratio">
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="default">
          <VideoPlayer
            autoplay={false}
            fallback="illustrations/heart/scene/brand-moments-positive-outro"
            source="illustrations/heart/scene/brand-moments-positive-outro"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="landscape">
          <VideoPlayer
            autoplay={false}
            aspectRatio="landscape"
            fallback="illustrations/heart/scene/brand-moments-positive-outro"
            source="illustrations/heart/scene/brand-moments-positive-outro"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="portrait">
          <VideoPlayer
            autoplay={false}
            aspectRatio="portrait"
            fallback="illustrations/heart/scene/brand-moments-positive-outro"
            source="illustrations/heart/scene/brand-moments-positive-outro"
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="square">
          <VideoPlayer
            autoplay={false}
            aspectRatio="square"
            fallback="illustrations/heart/scene/brand-moments-positive-outro"
            source="illustrations/heart/scene/brand-moments-positive-outro"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "VideoPlayer: Sticker Sheet",
}

export const PausePlay: StickerSheetStory = {
  render: () => (
    <VideoPlayer
      autoplay={false}
      fallback="illustrations/heart/scene/brand-moments-positive-outro"
      source="illustrations/heart/scene/brand-moments-positive-outro"
    />
  ),
  name: "VideoPlayer: Pause/Play",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByRole("button")

    waitFor(() => {
      userEvent.click(element)
      expect(element).toHaveAttribute("aria-label", "Pause animation")
    })

    waitFor(() => {
      userEvent.click(element)
      expect(element).toHaveAttribute("aria-label", "Play animation")
    })
  },
}
