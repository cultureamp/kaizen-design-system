/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"

export default {
  title: "Systems/Tailwind/Utility Class References/Modifiers/Pseudo Selectors",
  parameters: {
    a11y: { disable: true },
    docsLayout: "fullPage",
    docs: {
      description: {
        component:
          "Add a modifier before a standard tailwind utility class to have it apply in certain states. For example, hover:text-blue-500 will set the font color to blue-500 on hover.",
      },
    },
  },
} satisfies Meta

export const PseudoSelectors: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header
      headings={["Utility Class", "Compiled CSS", "Example"]}
    />
    <StickerSheet.Row rowTitle="hover">
      <p className="font-family-paragraph">hover:bg-blue-200</p>
      <p className="font-family-paragraph">background-color: #bde2f5</p>
      <button
        type="button"
        className="border-solid bg-white border-[black] font-family-paragraph w-[150px] rounded-default hover:bg-blue-200 py-16 px-12 text-center"
      >
        Hover me
      </button>
    </StickerSheet.Row>
    <StickerSheet.Row rowTitle="focus">
      <p className="font-family-paragraph">focus:bg-blue-200</p>
      <p className="font-family-paragraph">background-color: #bde2f5</p>
      <button
        type="button"
        tabIndex={0}
        className="border-solid bg-white border-[black] font-family-paragraph w-[150px] rounded-default focus:bg-blue-200 py-16 px-12 text-center"
      >
        Focus me
      </button>
    </StickerSheet.Row>
  </StickerSheet>
)
