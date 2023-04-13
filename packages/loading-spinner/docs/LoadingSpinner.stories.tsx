import React from "react"
import { StoryFn, StoryObj } from "@storybook/react"
import colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { LoadingSpinner } from "@kaizen/loading-spinner"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { StickerSheet } from "../../../storybook/components/StickerSheet"

const meta = {
  tags: ["autodocs"],
  title: "Components/Loading/Loading Spinner",
  component: LoadingSpinner,
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    installation: [
      "npm install @kaizen/loading-skeleton",
      "import { LoadingSpinner } from `@kaizen/loading-spinner`",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/packages/loading-spinner",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-39908&t=woUD77xUSAMkDHIS-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3082093253/Loading+Spinner",
    },
  },
}

export default meta

/**
 * LoadingSpinner will inherit its color from the parent's `color` property.
 *
 * That color will become the foreground, and the background will be the same
 * color with 10% opacity.
 *
 * When inside a button, it is intended to have the same color as the label text.
 */
export const Playground: StoryObj<typeof meta> = {
  parameters: {
    args: {
      accessibilityLabel: "Loading comments",
      size: "sm",
    },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

const StickerSheetTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StickerSheet isReversed={isReversed}>
    <StickerSheet.Header headings={["sm", "md"]} />
    <StickerSheet.Row isReversed={isReversed}>
      <LoadingSpinner accessibilityLabel="Loading comments" size="sm" />
      <LoadingSpinner accessibilityLabel="Loading comments" size="md" />
    </StickerSheet.Row>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = { chromatic: { disable: false } }

export const StickerSheetReversed = StickerSheetTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
  controls: { disable: true },
}
