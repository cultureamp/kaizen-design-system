import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within, expect, waitFor } from "@storybook/test"
import { VideoPlayer } from "./index"

const meta = {
  title: "Components/Illustrations/VideoPlayer",
  component: VideoPlayer,
  args: {
    autoplay: false,
    fallback: "illustrations/heart/scene/brand-moments-positive-outro",
    source: "illustrations/heart/scene/brand-moments-positive-outro",
  },
} satisfies Meta<typeof VideoPlayer>

<<<<<<< HEAD
export default meta
=======
const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet title="Aspect Ratio">
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="default">
          <div className="border border-dashed border-grey-500">
            <VideoPlayer
              autoplay={false}
              fallback="illustrations/heart/scene/brand-moments-positive-outro"
              source="illustrations/heart/scene/brand-moments-positive-outro"
            />
          </div>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="landscape">
          <div className="border border-dashed border-grey-500">
            <VideoPlayer
              autoplay={false}
              aspectRatio="landscape"
              fallback="illustrations/heart/scene/brand-moments-positive-outro"
              source="illustrations/heart/scene/brand-moments-positive-outro"
            />
          </div>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="portrait">
          <div className="border border-dashed border-grey-500">
            <VideoPlayer
              autoplay={false}
              aspectRatio="portrait"
              fallback="illustrations/heart/scene/brand-moments-positive-outro"
              source="illustrations/heart/scene/brand-moments-positive-outro"
            />
          </div>
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="square">
          <div className="border border-dashed border-grey-500">
            <VideoPlayer
              autoplay={false}
              aspectRatio="square"
              fallback="illustrations/heart/scene/brand-moments-positive-outro"
              source="illustrations/heart/scene/brand-moments-positive-outro"
            />
          </div>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  ),
}
>>>>>>> bacab6a0282ae07ca5e00cce8375ca451a1d4666

type Story = StoryObj<typeof meta>

export const PausePlay: Story = {
  render: args => <VideoPlayer {...args} />,
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
